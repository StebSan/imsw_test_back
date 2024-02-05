import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/shared/pagination/dto/pagination.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectDataSource() private readonly dataSource: DataSource,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<any> {
    return this.userRepository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async paginateAll(paginationDto: PaginationDto) {
    let { current = 1, limit = 10 } = paginationDto;

    current = Number(current) >= 1 ? Number(current) : 1;
    limit = Number(limit) >= 1 ? Number(limit) : 10;

    const [results, total] = await this.userRepository.findAndCount({
      skip: (current - 1) * limit,
      take: limit,
      order: {
        createdAt: 'DESC',
      },
    });

    const totalPages = Math.ceil(total / limit);

    return {
      results,
      total,
      totalPages,
      current,
      limit,
    };
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }
}
