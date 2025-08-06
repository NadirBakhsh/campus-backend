import { ApiProperty } from '@nestjs/swagger';

export class CreateCampusDto {
  @ApiProperty({
    description: 'University ID that the campus belongs to',
    default: 1,
  })
  universityId: number;

  @ApiProperty({
    description: 'Title of the campus',
    default: 'Main Campus',
  })
  title: string;

  @ApiProperty({
    description: 'Unique code for the campus',
    default: 'MAIN',
  })
  campusCode: string;

  @ApiProperty({
    description: 'Email address of the campus',
    default: 'campus@university.com',
  })
  email: string;

  @ApiProperty({
    description: 'Latitude of the campus location',
    default: 37.7749,
  })
  latitude: number;

  @ApiProperty({
    description: 'Longitude of the campus location',
    default: -122.4194,
  })
  longitude: number;
}

