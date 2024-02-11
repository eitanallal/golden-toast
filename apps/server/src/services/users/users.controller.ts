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

  @Get('totalnumberofusers')
  async getTotalNumberOfUsers(): Promise<number> {
    return this.usersService.getTotalNumberOfUsers();
  }
}
