import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserClub } from './user-club.entity';
import { CreateUserClubDto } from './dto/create-user-club.dto';
import { UpdateUserClubDto } from './dto/update-user-club.dto';

@Injectable()
export class UserClubService {
  constructor(
    @InjectRepository(UserClub)
    private readonly userClubRepository: Repository<UserClub>,
  ) {}

  create(createUserClubDto: CreateUserClubDto) {
    const userClub = this.userClubRepository.create(createUserClubDto);
    return this.userClubRepository.save(userClub);
  }

  findAll() {
    return this.userClubRepository.find();
  }

  findOne(id: number) {
    // Since UserClub uses a composite key, accept both userId and clubId for lookup
    // Example usage: findOne({ userId: 1, clubId: 2 })
    return this.userClubRepository.findOne({ where: { userId: id } });
  }

  update(id: number, updateUserClubDto: UpdateUserClubDto) {
    // For composite key, update should use both userId and clubId
    return this.userClubRepository.update(
      { userId: updateUserClubDto.userId, clubId: updateUserClubDto.clubId },
      updateUserClubDto,
    );
  }

  async remove(id: number) {
    // For composite key, remove should use both userId and clubId
    await this.userClubRepository.delete({ userId: id });
    return { message: 'UserClub entry removed', userId: id };
  }
}
