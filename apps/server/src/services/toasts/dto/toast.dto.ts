import {
  IsString,
  IsUUID,
  IsDate,
  IsBoolean,
  MinLength,
} from 'class-validator';
import {} from 'sequelize-typescript';

export class ToastDto {
  @IsUUID('4')
  readonly id: string;
  @IsString()
  readonly userId: string;
  @IsDate()
  @MinLength(4)
  readonly date: Date;
  @IsBoolean()
  readonly hasHappened: boolean;
}
