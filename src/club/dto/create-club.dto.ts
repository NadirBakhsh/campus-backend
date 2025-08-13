import { ApiProperty } from '@nestjs/swagger';

export class CreateClubDto {
  @ApiProperty({ default: 1 })
  campusId: number;

  @ApiProperty({ default: 'Sample Club Title' })
  title: string;

  @ApiProperty({ required: false, default: 'Sample club description' })
  description?: string;

  @ApiProperty({ default: true })
  isActive?: boolean;

  @ApiProperty({ required: false, default: 'https://example.com/banner.jpg' })
  bannerUrl?: string;
}
