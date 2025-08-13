import { PartialType } from '@nestjs/swagger';
import { CreateClub_ChatDto } from './create-club_chat.dto';

export class UpdateClub_ChatDto extends PartialType(CreateClub_ChatDto) {}
