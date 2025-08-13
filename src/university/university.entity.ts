import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

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
}

