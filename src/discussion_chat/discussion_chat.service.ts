import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discussion_Chat } from './discussion_chat.entity';
import { CreateDiscussion_ChatDto } from './dto/create-discussion_chat.dto';
import { UpdateDiscussion_ChatDto } from './dto/update-discussion_chat.dto';

@Injectable()
export class Discussion_ChatService {
  constructor(
    @InjectRepository(Discussion_Chat)
    private readonly discussionChatRepository: Repository<Discussion_Chat>,
  ) {}

  async create(createDto: CreateDiscussion_ChatDto) {
    try {
      const chat = this.discussionChatRepository.create(createDto);
      return await this.discussionChatRepository.save(chat);
    } catch {
      throw new InternalServerErrorException('Failed to create discussion chat');
    }
  }

  async findAll() {
    try {
      return await this.discussionChatRepository.find();
    } catch {
      throw new InternalServerErrorException('Failed to get discussion chats');
    }
  }

  async findOne(id: number) {
    const chat = await this.discussionChatRepository.findOne({ where: { id } });
    if (!chat) throw new NotFoundException(`Discussion chat with id ${id} not found`);
    return chat;
  }

  async update(id: number, updateDto: UpdateDiscussion_ChatDto) {
    const chat = await this.discussionChatRepository.findOne({ where: { id } });
    if (!chat) throw new NotFoundException(`Discussion chat with id ${id} not found`);
    Object.assign(chat, updateDto);
    try {
      return await this.discussionChatRepository.save(chat);
    } catch {
      throw new InternalServerErrorException('Failed to update discussion chat');
    }
  }

  async remove(id: number) {
    const chat = await this.discussionChatRepository.findOne({ where: { id } });
    if (!chat) throw new NotFoundException(`Discussion chat with id ${id} not found`);
    try {
      await this.discussionChatRepository.remove(chat);
      return { message: 'Discussion chat removed successfully' };
    } catch {
      throw new InternalServerErrorException('Failed to remove discussion chat');
    }
  }
}
