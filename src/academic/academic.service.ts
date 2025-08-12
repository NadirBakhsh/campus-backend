import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Academic } from './academic.entity';
import { CreateAcademicDto } from './dto/create-academic.dto';
import { UpdateAcademicDto } from './dto/update-academic.dto';

@Injectable()
export class AcademicService {
  constructor(
    @InjectRepository(Academic)
    private readonly academicRepository: Repository<Academic>,
  ) {}

  async create(createAcademicDto: CreateAcademicDto) {
    const isAcademicExists = await this.academicRepository.findOne({
      where: { id: createAcademicDto.id },
    });
    if (isAcademicExists) {
      throw new BadRequestException(
        `Academic with ID ${createAcademicDto.id} already exists`,
        {
          cause: new Error(
            `Academic with ID ${createAcademicDto.id} already exists`,
          ),
          description: 'A academic with this ID already exists.',
        },
      );
    }
    return await this.academicRepository.save(createAcademicDto);
  }

  async findAll() {
    try {
      return await this.academicRepository.find();
    } catch (error) {
      throw new BadRequestException('Failed to retrieve academic records', {
        cause: error,
        description:
          'There was an issue retrieving academic records from the database.',
      });
    }
  }

  async findOne(id: number) {
    const academic = await this.academicRepository.findOne({ where: { id } });
    if (!academic) {
      throw new BadRequestException(`Academic with ID ${id} not found`, {
        description: 'No academic found with the provided ID.',
      });
    }
    return academic;
  }

  async update(id: number, updateAcademicDto: UpdateAcademicDto) {
    try {
      const academic = await this.academicRepository.preload({
        id: id,
        ...updateAcademicDto,
      });
      if (!academic) {
        throw new BadRequestException(`Academic with ID ${id} not found`);
      }
      return await this.academicRepository.save(academic);
    } catch (error) {
      throw new BadRequestException(`Failed to update academic with ID ${id}`, {
        cause: error,
        description:
          'There was an issue updating the academic record in the database.',
      });
    }
  }

  async remove(id: number) {
    try {
      const academic = await this.academicRepository.findOneBy({ id });
      if (!academic) {
        throw new BadRequestException(`Academic with ID ${id} not found`);
      }
      await this.academicRepository.remove(academic);
      return { message: `Academic with ID ${id} removed successfully` };
    } catch (error) {
      throw new BadRequestException(`Failed to remove academic with ID ${id}`, {
        cause: error,
        description:
          'There was an issue removing the academic record from the database.',
      });
    }
  }
}
