import { ApiProperty } from '@nestjs/swagger';

export class CreateUniversityDto {
  @ApiProperty({ example: 'Harvard University', default: 'Harvard University', description: 'Name of the university' })
  title: string;

  @ApiProperty({ example: 'Cambridge, MA', default: 'Cambridge, MA', description: 'Location of the university' })
  location: string;

  @ApiProperty({ example: 1, default: 1, description: 'Admin ID' })
  adminId: number;

  @ApiProperty({ example: 'https://example.com/avatar.png', default: 'https://example.com/avatar.png', description: 'Avatar URL' })
  avatarUrl: string;
}
