import { ApiProperty } from '@nestjs/swagger';
import { Campus } from 'src/campus/campus.entity';
import { Contact } from 'src/contact/contact.entity';
import { Department } from 'src/department/department.entity';
import { Discussion } from 'src/discussion/discussion.entity';
import { Enrollment } from 'src/enrollment/enrollment.entity';
import { Notification } from 'src/notification/notification.entity';
import { User } from 'src/users/user.entity';
import { Event } from 'src/event/event.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class University {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  adminId: number;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  avatarUrl: string;

  @ManyToOne(() => User, user => user.adminUniversities)
  admin: User;

  @OneToMany(() => Enrollment, enrollment => enrollment.university)
  enrollments: Enrollment[];

  @OneToMany(() => Department, department => department.university)
  departments: Department[];

  @OneToMany(() => Campus, campus => campus.university)
  campuses: Campus[];

  @OneToMany(() => Contact, contacts => contacts.university)
  contacts: Contact[];

  @OneToMany(() => Discussion, discussion => discussion.university)
  discussions: Discussion[];
  
  @OneToMany(() => Notification, notification => notification.university)
  notifications: Notification[];

  @OneToMany(() => Event, event => event.university)
  events: Event[];
}
