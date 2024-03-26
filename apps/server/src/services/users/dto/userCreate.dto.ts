import { IsBoolean, IsString, MinLength } from 'class-validator';

export class UserCreateDto {
  @IsString()
  @MinLength(4, { message: 'Username is 4+ characters' })
  readonly username: string;

  @IsString()
  @MinLength(2, { message: 'First name is 2+ characters' })
  readonly firstName: string;

  @IsString()
  @MinLength(2, { message: 'Last name is 2+ characters' })
  readonly lastName: string;

  @IsString()
  @MinLength(8, { message: 'Password is 8+ characters' })
  readonly password: string;

  @IsBoolean()
  readonly isAdmin: boolean;
}
