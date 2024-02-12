import { Body, Controller, Get, Put, Post, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
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

  @Get('username/:id') //localhost:3000/api/users/Username/0a43f9d4-119b-4ab3-99eb-c3698b5bca77
  async getUserData(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserData(id);
  }

  @Get('login/:username/:password')
  async checkUsernamePasswordMatch(
    @Param('username') username: string,
    @Param('password') password: string
  ): Promise<boolean> {
    return this.usersService.checkUsernamePasswordMatch(username, password);
  }
}
