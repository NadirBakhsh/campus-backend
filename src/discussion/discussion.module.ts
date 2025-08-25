import { Module } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { DiscussionController } from './discussion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discussion } from './discussion.entity';
import { UserDiscussion } from '../user-discussion/user-discussion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Discussion, UserDiscussion])],
  controllers: [DiscussionController],
  providers: [DiscussionService],
})
export class DiscussionModule {}
