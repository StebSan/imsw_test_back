import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '1990-02-18 00:00:00' })
  @Column({ name: 'created_at', type: 'datetime', default: () => 'NOW()' })
  createdAt: Date;

  @ApiProperty({ example: 'Monica' })
  @Column()
  name: string;

  @ApiProperty({ example: '33' })
  @Column({ name: 'years_old' })
  yearsOld: number;

  @ApiProperty({ example: 'moni@gmail.com' })
  @Column({ unique: true })
  email: string;
}
