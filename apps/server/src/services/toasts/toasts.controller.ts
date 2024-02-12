import { Body, Controller, Get, Put, Post, Param } from '@nestjs/common';
import { ToastsService } from './toasts.service';
import { Toast } from './toast.model';
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
}
