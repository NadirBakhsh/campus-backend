import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Club_Chat } from './club_chat.entity';
import { CreateClub_ChatDto } from './dto/create-club_chat.dto';
import { UpdateClub_ChatDto } from './dto/update-club_chat.dto';

@Injectable()
export class Club_ChatService {
  constructor(
    @InjectRepository(Club_Chat)
    private readonly clubChatRepository: Repository<Club_Chat>,
  ) {}

  async create(createDto: CreateClub_ChatDto) {
    try {
      const chat = this.clubChatRepository.create(createDto);
      return await this.clubChatRepository.save(chat);
    } catch {
      throw new InternalServerErrorException('Failed to create chat');
    }
  }

  async findAll() {
    try {
      return await this.clubChatRepository.find();
    } catch {
      throw new InternalServerErrorException('Failed to get chats');
    }
  }

  async findOne(id: number) {
    const chat = await this.clubChatRepository.findOne({ where: { id } });
    if (!chat) throw new NotFoundException(`Chat with id ${id} not found`);
    return chat;
  }

  async update(id: number, updateDto: UpdateClub_ChatDto) {
    const chat = await this.clubChatRepository.findOne({ where: { id } });
    if (!chat) throw new NotFoundException(`Chat with id ${id} not found`);
    Object.assign(chat, updateDto);
    try {
      return await this.clubChatRepository.save(chat);
    } catch {
      throw new InternalServerErrorException('Failed to update chat');
    }
  }

  async remove(id: number) {
    const chat = await this.clubChatRepository.findOne({ where: { id } });
    if (!chat) throw new NotFoundException(`Chat with id ${id} not found`);
    try {
      await this.clubChatRepository.remove(chat);
      return { message: 'Chat removed successfully' + ' id:' + id };
    } catch {
      throw new InternalServerErrorException('Failed to remove chat');
    }
  }
}
