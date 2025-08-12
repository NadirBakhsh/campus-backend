import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'academics' })
export class Academic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  enrollmentId: number;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 2,
    transformer: {
      to: (value: number | null) => value,
      from: (value: string | null) =>
        value === null ? null : parseFloat(value),
    },
  })
  cgpa: number; // <- now a number in TS

  @Column({ type: 'smallint' })
  semester: number;
}
