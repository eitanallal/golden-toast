import {
  Body,
  Controller,
  Get,
  Put,
  Post,
  Param,
  Delete,
} from '@nestjs/common';
import { ToastsService } from './toasts.service';
import { Toast } from './entities/toast.model';
import { ToastDto } from './dto/toast.dto';

@Controller('toasts')
export class ToastsController {
  constructor(private readonly toastsService: ToastsService) {}

  @Get()
  async findall(): Promise<ToastDto[]> {
    return this.toastsService.findAll();
  }

  @Post()
  async create(@Body() toast: ToastDto): Promise<Toast> {
    return this.toastsService.create(toast);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() toastUpdated: ToastDto
  ): Promise<[affectedCount: number]> {
    return this.toastsService.update(id, toastUpdated);
  }

  @Get('past')
  async getGlobalPassedToasts(): Promise<Toast[]> {
    return this.toastsService.getGlobalPassedToasts();
  }

  @Get('past/:id')
  async getUserPassedToasts(@Param('id') id: string): Promise<Toast[]> {
    return this.toastsService.getUserPassedToasts(id);
  }

  @Get('future')
  async getGlobalFutureToasts(): Promise<Toast[]> {
    return this.toastsService.getGlobalFutureToasts();
  }

  @Get('future/:id')
  async getUserFutureToasts(@Param('id') id: string): Promise<Toast[]> {
    return this.toastsService.getUserFutureToasts(id);
  }

  @Get('currentscore')
  async getCurrentPeriodScore(): Promise<number> {
    return this.toastsService.getCurrentPeriodScore();
  }

  @Get('bestscore')
  async getBestScore(): Promise<number> {
    return this.toastsService.getBestScore();
  }

  @Get('LeaderBoard')
  async getLeaderBoard(): Promise<Toast[]> {
    return this.toastsService.getLeaderBoard();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.toastsService.delete(id);
  }
}
