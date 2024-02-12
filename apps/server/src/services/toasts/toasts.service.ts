import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Toast } from './toast.model';
import { ToastDto } from './dto/toast.dto';

@Injectable()
export class ToastsService {
  constructor(
    @InjectModel(Toast)
    private toastModel: typeof Toast
  ) {}

  async findAll(): Promise<ToastDto[]> {
    return await this.toastModel.findAll();
  }

  async create(toast: ToastDto): Promise<Toast> {
    return this.toastModel.create(toast);
  }

  async update(
    id: number,
    toastUpdated: ToastDto
  ): Promise<[affectedCount: number]> {
    const numberAffected = await this.toastModel.update(toastUpdated, {
      where: { id: id },
    });
    return numberAffected;
  }
}
