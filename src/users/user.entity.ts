import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/_common/enums';
import { University } from '../university/university.entity';
@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column({select: false})
  password: string;

  @ApiProperty()
  @Column({ type: 'text', default: UserRole.STUDENT })
  role: UserRole;

  @ApiProperty()
  @Column()
  status: string;

  @OneToMany(() => University, university => university.admin)
  adminUniversities: University[];

}
