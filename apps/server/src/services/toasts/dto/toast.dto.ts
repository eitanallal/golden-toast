import { IsUUID, IsDate, IsBoolean } from 'class-validator';
import {} from 'sequelize-typescript';

export class ToastDto {
  @IsUUID('4')
  readonly id: string;
  @IsUUID('4')
  readonly userId: string;
  @IsDate()
  readonly date: Date;
  @IsBoolean()
  readonly hasHappened: boolean;
}
