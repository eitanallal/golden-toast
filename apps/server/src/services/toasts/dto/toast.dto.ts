import { IsUUID, IsBoolean, IsDateString, IsOptional } from 'class-validator';
import {} from 'sequelize-typescript';

export class ToastDto {
  @IsUUID('4')
  @IsOptional()
  readonly id: string;
  @IsUUID('4')
  readonly userId: string;
  @IsDateString()
  readonly date: Date;
  @IsBoolean()
  readonly hasHappened: boolean;
}
