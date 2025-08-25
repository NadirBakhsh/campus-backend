import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserClub } from '../user-club/user-club.entity';

@Entity()
export class Club_Chat {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  memberId: number;

  @ApiProperty()
  @Column()
  message: string;

  @ApiProperty()
  @Column()
  date: Date;

  @ManyToOne(() => UserClub)
  @JoinColumn({ name: 'memberId', referencedColumnName: 'id' })
  userClub: UserClub;
}
