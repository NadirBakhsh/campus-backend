import { Entity, ManyToOne, PrimaryColumn, JoinColumn, Column } from 'typeorm';
import { User } from '../users/user.entity';
import { Club } from '../club/club.entity';

@Entity('user_club')
export class UserClub {
  @PrimaryColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  clubId: number;

  @ManyToOne(() => User, user => user.userClubs)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Club, club => club.userClubs)
  @JoinColumn({ name: 'clubId' })
  club: Club;
}
