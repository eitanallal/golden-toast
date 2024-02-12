import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Toast } from './toast.model';
import { ToastDto } from './dto/toast.dto';
import { Op } from 'sequelize';

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

  async getGlobalPassedToasts(): Promise<Toast[]> {
    const currentDate = new Date();
    const passedToasts = await this.toastModel.findAll({
      where: {
        date: {
          [Op.lt]: currentDate,
        },
      },
    });
    return passedToasts;
  }

  async getUserPassedToasts(id: string): Promise<Toast[]> {
    const currentDate = new Date();
    const passedToasts = await this.toastModel.findAll({
      where: {
        date: {
          [Op.lt]: currentDate,
        },
        userId: id,
      },
    });
    return passedToasts;
  }

  async getGlobalFutureToasts(): Promise<Toast[]> {
    const currentDate = new Date();
    const passedToasts = await this.toastModel.findAll({
      where: {
        date: {
          [Op.gt]: currentDate,
        },
      },
    });
    return passedToasts;
  }

  async getUserFutureToasts(id: string): Promise<Toast[]> {
    const currentDate = new Date();
    const passedToasts = await this.toastModel.findAll({
      where: {
        date: {
          [Op.gt]: currentDate,
        },
        userId: id,
      },
    });
    return passedToasts;
  }

  startPeriodDate(): Date {
    const startDate = new Date();
    if (startDate.getMonth() < 6) {
      console.log('Setting january');
      startDate.setUTCMonth(0);
    } else {
      console.log('Setting july');
      startDate.setUTCMonth(6);
    }
    startDate.setUTCDate(1);
    startDate.setUTCHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    startDate.setMilliseconds(0);
    return startDate;
  }

  EndPeriodDate(startDate: Date): Date {
    const endDate = new Date(startDate);
    if (startDate.getMonth() < 6) {
      console.log('Setting january');
      startDate.setUTCMonth(0);
    } else {
      console.log('Setting july');
      startDate.setUTCMonth(6);
    }
    startDate.setUTCDate(1);
    startDate.setUTCHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    startDate.setMilliseconds(0);
    return startDate;
  }

  async getCurrentPeriodScore(): Promise<number> {
    const currentDate = new Date();
    const startPeriodDate = this.startPeriodDate();
    const score = await this.toastModel.count({
      where: {
        hasHappened: true,
        date: {
          [Op.between]: [startPeriodDate, currentDate],
        },
      },
    });
    return score;
  }
}
