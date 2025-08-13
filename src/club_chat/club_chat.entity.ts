import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Club_Chat {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  memberid: number;

  @ApiProperty()
  @Column()
  message: string;

  @ApiProperty()
  @Column()
  date: Date;
}
