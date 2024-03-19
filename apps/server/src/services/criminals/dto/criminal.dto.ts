import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class CriminalDto {
  @IsUUID('4')
  @IsOptional()
  readonly id: string;
  @IsUUID('4')
  readonly userId: string;
  @IsBoolean()
  readonly isPersonNonGrata: boolean;
}
