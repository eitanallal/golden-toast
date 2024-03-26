import { IsBoolean, IsDateString, IsOptional } from 'class-validator';

export class ToastEditDto {
  @IsDateString()
  @IsOptional()
  readonly date: Date;
  @IsBoolean()
  @IsOptional()
  readonly hasHappened: boolean;
}
