import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CriminalsService } from './criminals.service';
import { Criminal } from './entities/criminal.model';
import { CriminalDto, CriminalCreateDto, CriminalEditDto } from './dto';

@Controller('criminals')
export class CriminalsController {
  constructor(private readonly criminalsService: CriminalsService) {}

  @Get()
  async findall(): Promise<CriminalDto[]> {
    return this.criminalsService.findAll();
  }

  @Post()
  async create(@Body() criminal: CriminalCreateDto): Promise<Criminal> {
    return this.criminalsService.create(criminal);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.criminalsService.delete(id);
  }

  @Get('allusers')
  async getAllUsers() {
    return this.criminalsService.getAllUsers();
  }

  @Get(':id')
  async getByUser(@Param('id') id: string) {
    return this.criminalsService.getByUser(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() CriminalUpdated: CriminalEditDto
  ): Promise<[affectedCount: number]> {
    return this.criminalsService.update(id, CriminalUpdated);
  }
}
