import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async findAll(): Promise<UserDto[]> {
    return await this.userModel.findAll();
  }

  async create(user: UserDto): Promise<User> {
    return this.userModel.create(user);
  }

  async update(
    id: number,
    userUpdated: UserDto
  ): Promise<[affectedCount: number]> {
    const numberAffected = await this.userModel.update(userUpdated, {
      where: { id: id },
    });
    return numberAffected;
  }

  async getTotalNumberOfUsers(): Promise<number> {
    const wholeTable = this.userModel.findAll({ where: { isAdmin: true } });
    const numberOfAdmin = (await wholeTable).length;
    return numberOfAdmin;
  }

  // async getfirstNameFromId(id:)
}
