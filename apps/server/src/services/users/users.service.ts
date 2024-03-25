import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.model';
import { UserDto } from './dto/user.dto';
import { InvalidUsernamePasswordException } from './exceptions/invalid-username-password.error';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  async findAll(): Promise<UserDto[]> {
    return await this.userModel.findAll({ order: [['username', 'ASC']] });
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

  async getTotalNumberOfAdmins(): Promise<number> {
    const wholeTable = this.userModel.findAll({ where: { isAdmin: true } });
    const numberOfAdmin = (await wholeTable).length;
    return numberOfAdmin;
  }

  async getUserData(id: string): Promise<User> {
    const user = await this.userModel.findOne({ where: { id: id } });
    return user;
  }

  async checkUsernamePasswordMatch(
    username: string,
    password: string
  ): Promise<User> {
    const passwordMatches = await this.userModel.findOne({
      where: { username: username, password: password },
    });
    if (!passwordMatches) {
      throw new InvalidUsernamePasswordException();
    }
    return passwordMatches;
  }
}
