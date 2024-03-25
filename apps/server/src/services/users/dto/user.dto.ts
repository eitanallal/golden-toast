import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  @MinLength(4, { message: 'Username is 4+ characters' })
  readonly username: string;

  @IsString()
  @IsOptional()
  @MinLength(2, { message: 'First name is 2+ characters' })
  readonly firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(2, { message: 'Last name is 2+ characters' })
  readonly lastName: string;

  @IsString()
  @IsOptional()
  @MinLength(8, { message: 'Password is 8+ characters' })
  readonly password: string;

  @IsBoolean()
  @IsOptional()
  readonly isAdmin: boolean;
}
