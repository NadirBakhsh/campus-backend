import { Module } from '@nestjs/common';
import { CampusService } from './campus.service';
import { CampusController } from './campus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campus } from './campus.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([Campus])
    ],
  providers: [CampusService],
  controllers: [CampusController]
})
export class CampusModule {}
