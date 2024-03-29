import { IsUUID, IsBoolean, IsDateString } from 'class-validator';

export class ToastDto {
  @IsUUID('4')
  readonly id: string;
  @IsUUID('4')
  readonly userId: string;
  @IsDateString()
  readonly date: Date;
  @IsBoolean()
  readonly hasHappened: boolean;
}
