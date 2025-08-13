import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class University {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  adminId: number;

  @ApiProperty()
  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  avatarUrl: string;

  @ManyToOne(() => User, user => user.adminUniversities)
  admin: User;
}
