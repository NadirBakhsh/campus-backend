import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';

@Injectable()
export class UniversityService {
  private universities: Array<CreateUniversityDto & { id: number }> = [];
  private idCounter = 1;

  create(createUniversityDto: CreateUniversityDto) {
    const university = { id: this.idCounter++, ...createUniversityDto };
    this.universities.push(university);
    return university;
  }

  findAll() {
    return this.universities;
  }

  findOne(id: number) {
    const university = this.universities.find(u => u.id === id);
    if (!university) throw new NotFoundException('University not found');
    return university;
  }

  update(id: number, updateUniversityDto: UpdateUniversityDto) {
    const index = this.universities.findIndex(u => u.id === id);
    if (index === -1) throw new NotFoundException('University not found');
    this.universities[index] = { 
      ...this.universities[index], 
      ...(typeof updateUniversityDto === 'object' && updateUniversityDto !== null ? updateUniversityDto : {}) 
    };
    return this.universities[index];
  }

  remove(id: number) {
    const index = this.universities.findIndex(u => u.id === id);
    if (index === -1) throw new NotFoundException('University not found');
    const removed = this.universities.splice(index, 1);
    return removed[0];
  }
}
