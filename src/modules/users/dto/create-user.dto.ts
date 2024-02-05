import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ example: '1990-02-18 00:00:00' })
  createdAt: Date;

  @ApiProperty({ example: 'Monica' })
  name: string;

  @ApiProperty({ example: '33' })
  @IsNumber({}, { message: 'La edad debe ser un número' })
  yearsOld: number;

  @ApiProperty({ example: 'moni@gmail.com' })
  @IsEmail({}, { message: 'Email inválido' })
  email: string;
}
