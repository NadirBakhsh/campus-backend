import { PartialType } from '@nestjs/swagger';
import { CreateDiscussion_ChatDto } from './create-discussion_chat.dto';

export class UpdateDiscussion_ChatDto extends PartialType(CreateDiscussion_ChatDto) {}
