import { ApiProperty } from '@nestjs/swagger';
import { Department } from 'src/department/department.entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class University {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @ManyToOne(() => User, user => user.adminUniversities)
  @JoinColumn({ name: 'adminId' })
  admin: User;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  avatarUrl: string;

  @OneToMany(() => Department, department => department.university)
  departments: Department[];

}

