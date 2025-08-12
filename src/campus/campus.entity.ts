import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Campus {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  universityId: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  campusCode: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column('decimal', { precision: 10, scale: 6 })
  latitude: number;

  @ApiProperty()
  @Column('decimal', { precision: 10, scale: 6 })
  longitude: number;
}
