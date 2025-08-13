import { ApiProperty } from '@nestjs/swagger';

export class CreateClub_ChatDto {
  @ApiProperty({  type: Number, default: 1 })
  memberid: number;

  @ApiProperty({ default: 'Hello, this is a message.' })
  message: string;

  @ApiProperty({ type: String, format: 'date-time', default: '2024-01-01T12:00:00Z' })
  date: Date;
}
