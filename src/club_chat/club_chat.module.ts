import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club_Chat } from './club_chat.entity';
import { Club_ChatService } from './club_chat.service';
import { Club_ChatController } from './club_chat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Club_Chat])],
  controllers: [Club_ChatController],
  providers: [Club_ChatService],
})
export class Club_ChatModule {}
