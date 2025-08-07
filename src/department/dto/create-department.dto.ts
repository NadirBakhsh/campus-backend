import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDto {
  @ApiProperty({
    required: true,
    description: 'University ID that the department belongs to',
    example: 1,
    default: 1,
  })
  @IsNumber()
  universityId: number;

  @ApiProperty({
    required: true,
    description: 'Department title',
    example: 'Information Technology',
  })
  @IsString()
  @IsNotEmpty()
  title: string;
}
