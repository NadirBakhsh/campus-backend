import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './contact.entity';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { University } from '../university/university.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contact, University])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
