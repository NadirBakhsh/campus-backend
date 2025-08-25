import { ApiProperty } from '@nestjs/swagger';

export class CreateUserClubDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  clubId: number;

  // Add more fields here if your join table has additional columns
}
