import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Campus } from '../campus/campus.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  campusId: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  venue: string;

  @Column({ type: 'date' })
  date: Date;

  @Column()
  type: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  bannerUrl: string;
}
