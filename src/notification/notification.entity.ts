import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity({ name: 'notifications' })
export class Notification {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @ApiProperty()
  @Column({ type: 'int' })
  universityId: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 150 })
  title: string;

  @ApiProperty()
  @Column({ type: 'text' })
  message: string;

  // Postgres: use timestamptz (timestamp with time zone)
  @ApiProperty()
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
