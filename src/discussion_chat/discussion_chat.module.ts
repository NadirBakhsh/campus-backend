import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discussion_Chat } from './discussion_chat.entity';
import { Discussion_ChatService } from './discussion_chat.service';
import { Discussion_ChatController } from './discussion_chat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Discussion_Chat])],
  controllers: [Discussion_ChatController],
  providers: [Discussion_ChatService],
})
export class Discussion_ChatModule {}
