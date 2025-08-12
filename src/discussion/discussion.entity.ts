import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
