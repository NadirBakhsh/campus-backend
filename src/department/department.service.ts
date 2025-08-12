import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {
    // Initialization logic if needed
  }
  async create(createDepartmentDto: CreateDepartmentDto) {
    const isDepartmentExists = await this.departmentRepository.findOne({
      where: { title: createDepartmentDto.title },
    });
    if (isDepartmentExists) {
      throw new BadRequestException('Department already exists', {
        cause: new Error('Department already exists'),
        description: 'A department with this title already exists.',
      });
    }
    const department = this.departmentRepository.create(createDepartmentDto);
    try {
      return await this.departmentRepository.save(department);
    } catch (e) {
      throw new RequestTimeoutException(
        'An error occurred while creating department',
        {
          cause: e,
          description: 'Failed to create department due to a database error.',
        },
      );
    }
  }

  async findAll() {
    try {
      return await this.departmentRepository.find();
    } catch (e) {
      throw new RequestTimeoutException(
        'An error occurred while fetching departments',
        {
          cause: e,
          description: 'Failed to fetch departments due to a database error.',
        },
      );
    }
  }

  async findOne(id: number) {
    const department = await this.departmentRepository.findOne({
      where: { id },
    });
    if (!department) {
      throw new BadRequestException('Department not found', {
        cause: new Error('Department not found'),
        description: 'No department found with the given ID.',
      });
    }
    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.departmentRepository.findOne({
      where: { id },
    });
    if (!department) {
      throw new BadRequestException('Department not found', {
        cause: new Error('Department not found'),
        description: 'No department found with the given ID.',
      });
    }
    const updatedDepartment = Object.assign(department, updateDepartmentDto);
    try {
      return await this.departmentRepository.save(updatedDepartment);
    } catch (e) {
      throw new RequestTimeoutException(
        'An error occurred while updating department',
        {
          cause: e,
          description: 'Failed to update department due to a database error.',
        },
      );
    }
  }

  async remove(id: number) {
    const department = await this.departmentRepository.findOne({
      where: { id },
    });
    if (!department) {
      throw new BadRequestException('Department not found', {
        cause: new Error('Department not found'),
        description: 'No department found with the given ID.',
      });
    }
    try {
       await this.departmentRepository.remove(department);
      return { message: 'Department successfully removed', departmentId: id };
    } catch (e) {
      throw new RequestTimeoutException(
        'An error occurred while removing department',
        {
          cause: e,
          description: 'Failed to remove department due to a database error.',
        },
      );
    }
  }
}
