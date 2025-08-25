import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClubService } from './user-club.service';
import { UserClubController } from './user-club.controller';
import { UserClub } from './user-club.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserClub])],
  controllers: [UserClubController],
  providers: [UserClubService],
  exports: [TypeOrmModule],
})
export class UserClubModule {}
