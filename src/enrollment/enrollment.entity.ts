import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Enrollment {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  universityId: number;

  @ApiProperty()
  @Column()
  departmentId: number;

  @ApiProperty()
  @Column()
  campusId: number;

  @ApiProperty()
  @Column()
  studentId: number;

  @ApiProperty()
  @Column()
  rollNo: string;

  @ApiProperty()
  @Column({ type: 'date' })
  dob: Date;

  @ApiProperty()
  @Column()
  gender: string;
}
