import { ApiProperty } from '@nestjs/swagger';
import { Campus } from 'src/campus/campus.entity';
import { Department } from 'src/department/department.entity';
import { University } from 'src/university/university.entity';
import { User } from 'src/users/user.entity';
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

  @ManyToOne(() => User, users => users.enrollments)
  users: User[];

  @ManyToOne(() => University, university => university.enrollments)
  university: University;

  @ManyToOne(() => Campus, campus => campus.enrollments)
  campus: Campus[];

  @ManyToOne(() => Department, department => department.enrollments)
  department: Department[];

}
