import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/shared/pagination/dto/pagination.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      throw new BadRequestException('Error al crear el usuario');
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (error) {
      throw new BadRequestException('Error al crear el usuario');
    }
  }

  @Get('/page')
  async paginationByUser(@Query() paginationDto: PaginationDto) {
    try {
      return await this.usersService.paginateAll(paginationDto);
    } catch (error) {
      throw new BadRequestException('Error al crear el usuario');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.usersService.findOne(id);
    } catch (error) {
      throw new BadRequestException('Error al crear el usuario');
    }
  }
}
