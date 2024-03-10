import { Body, Controller, Get, Put, Post, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.model';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findall(): Promise<UserDto[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: UserDto): Promise<User> {
    return this.usersService.create(user);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() userUpdated: UserDto
  ): Promise<[affectedCount: number]> {
    return this.usersService.update(id, userUpdated);
  }

  @Get('totalNumberOfAdmins')
  async getTotalNumberOfAdmins(): Promise<number> {
    return this.usersService.getTotalNumberOfAdmins();
  }

  @Get('username/:id')
  async getUserData(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserData(id);
  }

  @Post('login/')
  async checkUsernamePasswordMatch(
    @Body() credentials: { username: string; password: string }
  ): Promise<User> {
    return this.usersService.checkUsernamePasswordMatch(
      credentials.username,
      credentials.password
    );
  }
}
