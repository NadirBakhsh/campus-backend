import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Discussion_Chat {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  senderId: number;

  @ApiProperty()
  @Column()
  message: string;

  @ApiProperty()
  @Column()
  date: Date;
}
