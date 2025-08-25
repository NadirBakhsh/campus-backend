import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Discussion } from '../discussion/discussion.entity';

@Entity('discussion_chat')
export class DiscussionChat {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  senderId: number;

  @ApiProperty()
  @Column()
  discussionId: number;

  @ApiProperty()
  @Column()
  message: string;

  @ApiProperty()
  @Column()
  date: Date;

  @ManyToOne(() => User, user => user.discussionChats)
  @JoinColumn({ name: 'senderId' })
  sender: User;

  @ManyToOne(() => Discussion, discussion => discussion.discussionChats)
  @JoinColumn({ name: 'discussionId' })
  discussion: Discussion;
}
