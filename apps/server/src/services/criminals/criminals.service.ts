import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CriminalCreateDto, CriminalDto, CriminalEditDto } from './dto/';
import { Criminal } from './entities/criminal.model';
import { User } from '../users/entities/user.model';
import { Sequelize } from 'sequelize';

@Injectable()
export class CriminalsService {
  constructor(
    @InjectModel(Criminal)
    private criminalModel: typeof Criminal
  ) {}

  async findAll(): Promise<CriminalDto[]> {
    return await this.criminalModel.findAll({
      include: [{ model: User }],
      order: [[Sequelize.col('user.id'), 'ASC']],
    });
  }

  async create(criminal: CriminalCreateDto): Promise<Criminal> {
    return this.criminalModel.create(criminal);
  }

  async update(
    id: number,
    criminalUpdated: CriminalEditDto
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

  async getAllUsers() {
    const users = await this.criminalModel.findAll({
      include: [{ model: User, attributes: [], right: true }],
      attributes: [
        [Sequelize.col('user.id'), 'id'],
        [Sequelize.col('user.username'), 'username'],
        [Sequelize.col('isPersonNonGrata'), 'status'],
      ],
      order: [[Sequelize.col('user.id'), 'ASC']],
    });
    return users;
  }

  async getByUser(id: string) {
    const userData = await this.criminalModel.count({
      where: { userId: id },
    });
    return userData;
  }
}
