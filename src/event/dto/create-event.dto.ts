import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateEventDto {
  @IsNumber()
  @ApiProperty({
    description: 'Campus ID that the event belongs to',
    example: 1,
    default: 1,
  })
  campusId: number

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Title of the event',
    example: 'Welcome Event',
  })
  title: string

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Short description of the event',
    example: 'This is a welcome event for new students',
    required: false,
  })
  description?: string

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Venue of the event',
    example: 'Main Building',
    required: false,
  })
  venue?: string

  @IsDateString()
  @ApiProperty({
    description: 'Date of the event',
    example: '2022-01-01',
  })
  date: string

  @IsString()
  @ApiProperty({
    description: 'Type of the event',
    example: 'Public',
  })
  type: string

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'Is the event active?',
    example: true,
    required: false,
    default: true,
  })
  isActive?: boolean = true

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Banner image URL',
    example: 'https://example.com/banner.png',
    required: false,
  })
  bannerUrl?: string
}
