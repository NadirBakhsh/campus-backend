import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { University } from 'src/university/university.entity';
import { Enrollment } from 'src/enrollment/enrollment.entity';

@Entity()
export class Department {
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
  @ManyToOne(() => University, (university) => university.departments)
  university: University;

  @OneToMany(() => Enrollment, enrollment => enrollment.department)
  enrollments: Enrollment[];
}
