import { BadGatewayException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { University } from './university.entity';

@Injectable()
export class UniversityService {
  constructor(
    @InjectRepository(University)
    private readonly universityRepository: Repository<University>,
  ) {}

  async create(createUniversityDto: CreateUniversityDto) {
    const isUniversityExists = await this.universityRepository.findOne({
      where: { title: createUniversityDto.title },
    });
    if (isUniversityExists) {
      throw new BadGatewayException('University already exists', {
        description: 'A university with this title already exists.',
      });
    }
    const university = this.universityRepository.create(createUniversityDto);
    return this.universityRepository.save(university);
  }

  findAll() {
    return this.universityRepository.find({relations: { contacts: true }});
  }

  findOne(id: number) {
    return this.universityRepository.findOne({ where: { id } });
  }

  update(id: number, updateUniversityDto: UpdateUniversityDto) {
    return this.universityRepository.update(id, updateUniversityDto);
  }

  async remove(id: number) {
    const isUniversityExists = await this.universityRepository.findOne({ where: { id } });
    if (!isUniversityExists) { 
      throw new BadGatewayException('University not found', {
        description: 'No university found with the provided ID.',
      });
    }
    await this.universityRepository.delete(id);
    return { message: 'University successfully removed', universityId: id };
  }
}
