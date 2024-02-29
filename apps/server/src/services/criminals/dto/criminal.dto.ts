import { IsBoolean, IsUUID } from 'class-validator';

export class CriminalDto {
  @IsUUID('4')
  readonly id: string;
  @IsUUID('4')
  readonly userId: string;
  @IsBoolean()
  readonly isPersonNonGrata: boolean;
}
