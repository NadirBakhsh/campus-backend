import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateEnrollmentDto {
  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'University ID that the enrollment belongs to',
    example: 1,
  })
  universityId: number

  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'Department ID that the enrollment belongs to',
    example: 1,
  })
  departmentId: number

  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'Campus ID that the enrollment belongs to',
    example: 1,
  })
  campusId: number

  @IsNumber()
  @ApiProperty({
    required: true,
    description: 'Student ID that the enrollment belongs to',
    example: 1,
  })
  studentId: number

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Roll no of the student',
    example: 'S123456',
  })
  rollNo: string

  @IsDateString()
  @ApiProperty({
    required: true,
    description: 'Date of birth of the student',
    example: '1990-01-01',
  })
  dob: string

  @IsString()
  @ApiProperty({
    required: true,
    description: 'Gender of the student',
    example: 'Male',
  })
  gender: string
}
