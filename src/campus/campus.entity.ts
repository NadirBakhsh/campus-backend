import { ApiProperty } from '@nestjs/swagger';
import { University } from 'src/university/university.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => University, university => university.campuses)
  university: University;
  
}
