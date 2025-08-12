import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive, Max, Min } from 'class-validator';

export class CreateAcademicDto {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the academic record',
    default: 1,
  })
  @IsPositive()
  id: number;

  @ApiProperty({
    example: 42,
    description: 'Enrollment ID (FK reference)',
    default: 42,
  })
  @IsInt()
  @IsPositive()
  enrollmentId: number;

  @ApiProperty({
    example: 3.45,
    description: 'CGPA (0.00–4.00)',
    default: 3.45,
  })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(4)
  cgpa: number;

  @ApiProperty({
    example: 5,
    description: 'Semester number (>=1)',
    default: 5,
  })
  @IsInt()
  @IsPositive()
  @Min(1)
  semester: number;
}
