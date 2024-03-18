import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CriminalDto } from './dto/criminal.dto';
import { Criminal } from './entities/criminal.model';
import { User } from '../users/entities/user.model';

@Injectable()
export class CriminalsService {
  constructor(
    @InjectModel(Criminal)
    private criminalModel: typeof Criminal
  ) {}

  async findAll(): Promise<CriminalDto[]> {
    return await this.criminalModel.findAll({});
  }

  async create(criminal: CriminalDto): Promise<Criminal> {
    return this.criminalModel.create(criminal);
  }

  async update(
    id: number,
    criminalUpdated: CriminalDto
  ): Promise<[affectedCount: number]> {
    const numberAffected = await this.criminalModel.update(criminalUpdated, {
      where: { userId: id },
    });
    return numberAffected;
  }

  async delete(id: string) {
    const deleted = await this.criminalModel.destroy({
      where: { userId: id },
    });
    return deleted > 0;
  }

  async getByUser(id: string) {
    const userData = await this.criminalModel.findAll({
      where: { userId: id },
    });
    return userData;
  }
}
