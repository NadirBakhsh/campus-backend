import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Discussion } from './discussion.entity';
import { CreateDiscussionDto } from './dto/create-discussion.dto';
import { UpdateDiscussionDto } from './dto/update-discussion.dto';

@Injectable()
export class DiscussionService {
  constructor(
    @InjectRepository(Discussion)
    private readonly discussionRepository: Repository<Discussion>,
  ) {}
  async create(createDiscussionDto: CreateDiscussionDto) {
    const discussion = this.discussionRepository.create(createDiscussionDto);
    return this.discussionRepository.save(discussion);
  }

  async findAll() {
    return await this.discussionRepository.find();
  }

  async findOne(id: number) {
    const discussion = await this.discussionRepository.findOneBy({ id });
    if (!discussion) {
      throw new BadRequestException(`Discussion with id ${id} not found`, {
        description: 'No discussion found with the provided ID.',
        cause: new Error(`Discussion with id ${id} not found`),
      }); // 404 Not Found
    }
    return await this.discussionRepository.findOneBy({ id });
  }

  async update(id: number, updateDiscussionDto: UpdateDiscussionDto) {
    const discussion = await this.discussionRepository.findOneBy({ id });
    if (!discussion) {
      throw new HttpException(`Discussion with id ${id} not found`, 404);
    }
    await this.discussionRepository.update(id, updateDiscussionDto);
    return {
      message: `Discussion with id ${id} updated successfully`,
      updatedData: this.findOne(id),
    };
  }

  async remove(id: number) {
    const discussion = await this.discussionRepository.findOneBy({ id });
    if (!discussion) {
      throw new Error(`Discussion with id ${id} not found`);
    }
    await this.discussionRepository.delete(id);
    return {
      message: `Discussion with id ${id} deleted successfully`,
      deletedData: discussion,
    };
  }
}
