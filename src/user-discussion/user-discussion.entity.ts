import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Discussion } from '../discussion/discussion.entity';

@Entity('user_discussion')
export class UserDiscussion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  discussionId: number;

  @ManyToOne(() => User, user => user.userDiscussions)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Discussion, discussion => discussion.userDiscussions)
  @JoinColumn({ name: 'discussionId' })
  discussion: Discussion;
}
