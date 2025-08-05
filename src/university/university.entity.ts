import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class University {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  adminId: number;

  @Column()
  title: string;

  @Column()
  avatarUrl: string;

  @Column()
  name: string;
}
