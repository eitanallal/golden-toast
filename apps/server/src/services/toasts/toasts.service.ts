import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Toast } from './entities/toast.model';
import { ToastDto } from './dto/toast.dto';
import { Op, Sequelize } from 'sequelize';
import { User } from '../users/entities/user.model';

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
      startDate.setUTCMonth(0);
    } else {
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
    if (endDate.getUTCMonth() == 0) {
      endDate.setUTCMonth(6);
    } else {
      endDate.setUTCFullYear(startDate.getUTCFullYear() + 1);
      endDate.setUTCMonth(0);
    }
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

  async getBestScoreSemester(comparatorFunction: symbol): Promise<number> {
    const midYearMonthIndex = 6;
    const list = await this.toastModel.findAll({
      attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'Total_Count']],
      where: {
        hasHappened: true,
        date: {
          [Op.gt]: new Date(),
        },
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn('DATE_PART', 'month', Sequelize.col('date')),
            { [comparatorFunction]: midYearMonthIndex }
          ),
        ],
      },
      group: [Sequelize.fn('DATE_PART', 'year', Sequelize.col('date'))],
      order: [['Total_Count', 'DESC']],
    });
    const recordSemester = list[0].dataValues['Total_Count'];
    return recordSemester;
  }

  async getBestScore(): Promise<number> {
    const recordSemester1 = await this.getBestScoreSemester(Op.lte);
    const recordSemester2 = await this.getBestScoreSemester(Op.gt);
    return Math.max(recordSemester1, recordSemester2);
  }

  async getLeaderBoard(): Promise<Toast[]> {
    const currentDate = new Date();
    const LeaderBoard = await this.toastModel.findAll({
      attributes: [
        [Sequelize.fn('COUNT', Sequelize.col('*')), 'totalcount'],
        [Sequelize.col('user.username'), 'username'],
      ],
      where: {
        hasHappened: true,
        date: {
          [Op.lt]: currentDate,
          [Op.gt]: this.startPeriodDate(),
        },
      },
      include: [
        {
          model: User,
          attributes: [],
          as: 'user',
        },
      ],
      group: ['"user"."id"'],
      order: [['totalcount', 'DESC']],
    });
    return LeaderBoard;
  }
}
