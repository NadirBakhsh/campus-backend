import { Module } from '@nestjs/common';
import { UserClubService } from './user-club.service';
import { UserClubController } from './user-club.controller';

@Module({
  controllers: [UserClubController],
  providers: [UserClubService],
})
export class UserClubModule {}
