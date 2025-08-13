import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Club } from './club.entity';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club)
    private readonly clubRepository: Repository<Club>,
  ) {}

  async create(createClubDto: CreateClubDto) {
    try {
      const club = this.clubRepository.create(createClubDto);
      return await this.clubRepository.save(club);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create club');
    }
  }

  async findAll() {
    try {
      return await this.clubRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Failed to get clubs');
    }
  }

  async findOne(id: number) {
    const club = await this.clubRepository.findOne({ where: { id } });
    if (!club) {
      throw new NotFoundException(`Club with id ${id} not found`);
    }
    return club;
  }

  async update(id: number, updateClubDto: UpdateClubDto) {
    const club = await this.clubRepository.findOne({ where: { id } });
    if (!club) {
      throw new NotFoundException(`Club with id ${id} not found`);
    }
    Object.assign(club, updateClubDto);
    try {
      return await this.clubRepository.save(club);
    } catch (error) {
      throw new InternalServerErrorException('Failed to update club');
    }
  }

  async remove(id: number) {
    const club = await this.clubRepository.findOne({ where: { id } });
    if (!club) {
      throw new NotFoundException(`Club with id ${id} not found`);
    }
    try {
      await this.clubRepository.remove(club);
      return { message: 'Club removed successfully' };
    } catch (error) {
      throw new InternalServerErrorException('Failed to remove club');
    }
  }
}
