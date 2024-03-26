import { IsUUID, IsBoolean, IsDateString } from 'class-validator';

export class ToastCreateDto {
  @IsUUID('4')
  readonly userId: string;
  @IsDateString()
  readonly date: Date;
  @IsBoolean()
  readonly hasHappened: boolean;
}
