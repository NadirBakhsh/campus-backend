import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { University } from '../university/university.entity'

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  universityId: number

  @Column()
  title: string
}
