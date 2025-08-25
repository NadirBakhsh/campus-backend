import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/_common/enums';
import { University } from '../university/university.entity';
import { Enrollment } from 'src/enrollment/enrollment.entity';
import { UserClub } from '../user-club/user-club.entity';
import { UserDiscussion } from '../user-discussion/user-discussion.entity';
import { DiscussionChat } from '../discussion_chat/discussion_chat.entity';
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

  @OneToMany(() => Enrollment, enrollment => enrollment.users)
  enrollments: Enrollment[];

  @OneToMany(() => UserClub, userClub => userClub.user)
  userClubs: UserClub[];

  @OneToMany(() => DiscussionChat, discussionChat => discussionChat.sender)
  discussionChats: DiscussionChat[];

  @OneToMany(() => UserDiscussion, userDiscussion => userDiscussion.user)
  userDiscussions: UserDiscussion[];

}
