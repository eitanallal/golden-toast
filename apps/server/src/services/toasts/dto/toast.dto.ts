import { IsUUID, IsBoolean, IsDateString, IsOptional } from 'class-validator';
import {} from 'sequelize-typescript';

export class ToastDto {
  @IsUUID('4')
  @IsOptional()
  readonly id: string;
  @IsUUID('4')
  @IsOptional()
  readonly userId: string;
  @IsDateString()
  @IsOptional()
  readonly date: Date;
  @IsBoolean()
  @IsOptional()
  readonly hasHappened: boolean;
}
