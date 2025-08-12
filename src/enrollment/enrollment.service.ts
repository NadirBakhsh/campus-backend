import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { Enrollment } from './enrollment.entity';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
  ) {}
  async create(createEnrollmentDto: CreateEnrollmentDto) {
    const isStudentExists = await this.enrollmentRepository.findOne({
      where: { rollNo: createEnrollmentDto.rollNo, studentId: createEnrollmentDto.studentId },
    });
    if (isStudentExists) {
      throw new BadRequestException('Student already enrolled', {
        description: `A student with this roll number OR ID ${createEnrollmentDto.studentId} is already enrolled.`,
      });
    }
    const enrollment = this.enrollmentRepository.create(createEnrollmentDto);
    return this.enrollmentRepository.save(enrollment);
  }

  async findAll() {
    try {
      return await this.enrollmentRepository.find();
    } catch (error) {
      throw new BadRequestException('Failed to retrieve enrollments', {
        description: 'An error occurred while fetching the enrollment list.',
      });
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} enrollment`;
  }

  update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
    return `This action updates a #${id} enrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollment`;
  }
}
