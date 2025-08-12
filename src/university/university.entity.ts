import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class University {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  adminId: number;

  @ApiProperty()
  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  avatarUrl: string;
}
