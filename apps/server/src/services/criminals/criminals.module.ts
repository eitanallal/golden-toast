import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Criminal } from './criminal.model';
import { CriminalsController } from './criminals.controller';
import { CriminalsService } from './criminals.service';

@Module({
  imports: [SequelizeModule.forFeature([Criminal])],
  controllers: [CriminalsController],
  providers: [CriminalsService],
})
export class CriminalsModule {}
