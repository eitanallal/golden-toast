import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Toast } from './toast.model';
import { ToastsController } from './toasts.controller';
import { ToastsService } from './toasts.service';

@Module({
  imports: [SequelizeModule.forFeature([Toast])],
  controllers: [ToastsController],
  providers: [ToastsService],
})
export class ToastsModule {}
