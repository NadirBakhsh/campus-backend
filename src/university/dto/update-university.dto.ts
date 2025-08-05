import { PartialType } from '@nestjs/mapped-types';
import { CreateUniversityDto } from './create-university.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUniversityDto extends PartialType(CreateUniversityDto) {
  @ApiPropertyOptional({ example: 'Harvard University', default: 'Harvard University', description: 'Name of the university' })
  title?: string;

  @ApiPropertyOptional({ example: 'Cambridge, MA', default: 'Cambridge, MA', description: 'Location of the university' })
  location?: string;

  @ApiPropertyOptional({ example: 1, default: 1, description: 'Admin ID' })
  adminId?: number;

  @ApiPropertyOptional({ example: 'https://example.com/avatar.png', default: 'https://example.com/avatar.png', description: 'Avatar URL' })
  avatarUrl?: string;
}