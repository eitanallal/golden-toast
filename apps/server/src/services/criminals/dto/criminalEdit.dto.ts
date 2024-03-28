import { IsBoolean } from 'class-validator';

export class CriminalEditDto {
  @IsBoolean()
  readonly isPersonNonGrata: boolean;
}
