import { IsBoolean, IsUUID } from 'class-validator';

export class CriminalCreateDto {
  @IsUUID('4')
  readonly userId: string;
  @IsBoolean()
  readonly isPersonNonGrata: boolean;
}
