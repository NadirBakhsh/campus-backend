import { ApiProperty } from '@nestjs/swagger';

export class CreateDiscussion_ChatDto {
  @ApiProperty({ default: 1 })
  senderId: number;

  @ApiProperty({ default: 'Hello, this is a discussion message.' })
  message: string;

  @ApiProperty({ type: String, format: 'date-time', default: '2024-01-01T12:00:00Z' })
  date: Date;
}
