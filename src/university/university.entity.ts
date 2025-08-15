import { ApiProperty } from '@nestjs/swagger';
import { Campus } from 'src/campus/campus.entity';
import { Department } from 'src/department/department.entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class University {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  adminId: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  avatarUrl: string;

  @ManyToOne(() => User, user => user.adminUniversities)
  admin: User;

  @OneToMany(() => Department, department => department.university)
  departments: Department[];

  @OneToMany(() => Campus, campus => campus.university)
  campuses: Campus[];

}
