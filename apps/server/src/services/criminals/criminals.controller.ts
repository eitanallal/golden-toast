import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriminalsService } from './criminals.service';
import { Criminal } from './criminal.model';
import { CriminalDto } from './dto/criminal.dto';

@Controller('criminals')
export class CriminalsController {
  constructor(private readonly criminalsService: CriminalsService) {}

  @Get()
  async findall(): Promise<CriminalDto[]> {
    return this.criminalsService.findAll();
  }

  @Post()
  async create(@Body() criminal: CriminalDto): Promise<Criminal> {
    return this.criminalsService.create(criminal);
  }
}
