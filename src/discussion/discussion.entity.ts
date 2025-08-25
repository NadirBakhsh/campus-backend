import { ApiProperty } from '@nestjs/swagger';
import { University } from 'src/university/university.entity';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UserDiscussion } from '../user-discussion/user-discussion.entity';
import { DiscussionChat } from '../discussion_chat/discussion_chat.entity';

@Entity({ name: 'discussions' })
export class Discussion {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @ApiProperty()
  @Column({ type: 'int' })
  universityId: number;

  @ApiProperty()
  @Column({ type: 'varchar', length: 150 })
  title: string;

  @ApiProperty()
  @Column({ type: 'text' })
  description: string;

  @ApiProperty()
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne(() => University, (university) => university.discussions)
  university: University;

  @OneToMany(() => UserDiscussion, userDiscussion => userDiscussion.discussion)
  userDiscussions: UserDiscussion[];

  @OneToMany(() => DiscussionChat, discussionChat => discussionChat.discussion)
  discussionChats: DiscussionChat[];
}
