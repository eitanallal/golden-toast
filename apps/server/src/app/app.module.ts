import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from '../services/users/users.module';
import { ToastsModule } from '../services/toasts/toasts.module';
import { CriminalsModule } from '../services/criminals/criminals.module';

@Module({
  imports: [
    UsersModule,
    ToastsModule,
    CriminalsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'IJustWannaLog5619#',
      database: 'postgres',
      autoLoadModels: true,
      models: [],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
