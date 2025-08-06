import { CreateCampusDto } from './dto/create-campus.dto';
import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateUniversityDto } from 'src/university/dto/create-university.dto';
import { Campus } from './campus.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CampusService {
  constructor(
    @InjectRepository(Campus)
    private readonly campusRepository: Repository<Campus>,
  ) {}
  async create(createCampusDto: CreateCampusDto) {
    const isCampusExists = await this.campusRepository.findOne({
      where: { title: createCampusDto.title },
    });
    if (isCampusExists) {
      throw new BadGatewayException('Campus already exists', {
        description: 'A campus with this title already exists.',
      });
    }
    const campus = this.campusRepository.create(createCampusDto);
    return this.campusRepository.save(campus);
  }
}
