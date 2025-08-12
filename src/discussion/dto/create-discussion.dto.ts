import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString, Length, Min, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDiscussionDto {
  @ApiProperty({ example: 12, description: 'FK to University.id' })
  @IsInt()
  @IsPositive()
  universityId: number;

  @ApiProperty({ example: 'Admission Queries', maxLength: 150 })
  @IsString()
  @Length(1, 150)
  title: string;

  @ApiProperty({ example: 'Ask anything about Fall 2025 admissions.' })
  @IsString()
  description: string;

  @ApiProperty({ example: true, required: false, default: true })
  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isActive: boolean = true;
}
