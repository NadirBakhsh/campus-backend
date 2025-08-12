import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsPositive,
  IsString,
  Length,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateNotificationDto {
  @ApiProperty({ example: 7, description: 'FK to University.id', default: 1 })
  @IsInt()
  @IsPositive()
  id: number;

  @ApiProperty({ example: 1, description: 'FK to University.id', default: 1 })
  @IsInt()
  @IsPositive()
  universityId: number;

  @ApiProperty({
    example: 'Orientation Day',
    maxLength: 150,
    default: 'New Notification',
  })
  @IsString()
  @Length(1, 150)
  title: string;

  @ApiProperty({
    example: 'Welcome! Orientation starts 9:00 AM in Hall A.',
    default: '',
  })
  @IsString()
  message: string;

  @ApiProperty({ example: '2025-08-10T10:30:00.000Z', required: false })
  @IsOptional()
  @Type(() => Date)
  @IsDateString()
  date?: Date;
}
