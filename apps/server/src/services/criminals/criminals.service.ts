import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CriminalDto } from './dto/criminal.dto';
import { Criminal } from './entities/criminal.model';

@Injectable()
export class CriminalsService {
  constructor(
    @InjectModel(Criminal)
    private criminalModel: typeof Criminal
  ) {}

  async findAll(): Promise<CriminalDto[]> {
    return await this.criminalModel.findAll();
  }

  async create(criminal: CriminalDto): Promise<Criminal> {
    return this.criminalModel.create(criminal);
  }

  async update(
    id: number,
    criminalUpdated: CriminalDto
  ): Promise<[affectedCount: number]> {
    const numberAffected = await this.criminalModel.update(criminalUpdated, {
      where: { id: id },
    });
    return numberAffected;
  }

  // async getfirstNameFromId(id:)
}
