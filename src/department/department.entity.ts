import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { University } from 'src/university/university.entity';

@Entity()
export class Department {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @ManyToOne(() => University, university => university.departments)
  @JoinColumn({ name: 'universityId' })
  university: University;

  @ApiProperty()
  @Column()
  title: string;
}
