import { ApiProperty } from '@nestjs/swagger';
import { University } from 'src/university/university.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Contact {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
    
    @ApiProperty()
    @Column()
    universityId: number;
    
    @ApiProperty()
    @Column()
    name: string;
    
    @ApiProperty()
    @Column()
    phone: string;
    
    @ApiProperty()
    @Column()
    email: string;
    
    @ApiProperty()
    @Column()
    category: string; // e.g., Admissions/Finance/Support
}
