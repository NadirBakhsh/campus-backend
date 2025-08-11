import { ApiPropertyOptional } from '@nestjs/swagger';
import { UserRole } from 'src/_common/enums';

export class UpdateUserDto {
  @ApiPropertyOptional()
  firstName?: string;

  @ApiPropertyOptional()
  lastName?: string;

  @ApiPropertyOptional()
  email?: string;

  @ApiPropertyOptional()
  password?: string;

  @ApiPropertyOptional()
  role?: UserRole;

  @ApiPropertyOptional()
  status?: string;
}
