import { Injectable } from '@nestjs/common';
import { CreateUserClubDto } from './dto/create-user-club.dto';
import { UpdateUserClubDto } from './dto/update-user-club.dto';

@Injectable()
export class UserClubService {
  create(createUserClubDto: CreateUserClubDto) {
    return 'This action adds a new userClub';
  }

  findAll() {
    return `This action returns all userClub`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userClub`;
  }

  update(id: number, updateUserClubDto: UpdateUserClubDto) {
    return `This action updates a #${id} userClub`;
  }

  remove(id: number) {
    return `This action removes a #${id} userClub`;
  }
}
