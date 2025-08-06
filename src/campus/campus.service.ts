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

 async  findAll() {
    let campuses: Campus[];
    try {
      campuses = await this.campusRepository.find();
    } catch (error) {
      throw new BadGatewayException('Failed to retrieve campuses', {
        description: 'An error occurred while fetching the campus list.',
      });
    }
    return campuses
  }

  async findOne(id: number) {
    const campus = await this.campusRepository.findOne({ where: { id } });
    if (!campus) {
      throw new BadGatewayException('Campus not found', {
        description: 'No campus found with the provided ID.',
      });
    }
    return campus;
  }

  async update(id: number, updateCampusDto: CreateCampusDto) {
    const isCampusExists = await this.campusRepository.findOne({ where: { id } });
    if (!isCampusExists) {
      throw new BadGatewayException('Campus not found', {
        description: 'No campus found with the provided ID.',
      });
    }
    await this.campusRepository.update(id, updateCampusDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const isCampusExists = await this.campusRepository.findOne({ where: { id } });
    if (!isCampusExists) { 
      throw new BadGatewayException('Campus not found', {
        description: 'No campus found with the provided ID.',
      });
    }
    await this.campusRepository.delete(id);
    return { message: 'Campus successfully removed', campusId: id };
  }

}
