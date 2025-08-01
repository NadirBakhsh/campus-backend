import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async register(createUserDto: CreateUserDto) {
    const emailExists = await this.usersService.isUserExists(
      createUserDto?.email,
    );
    if (emailExists) {
      throw new ConflictException({
        message: 'User already exists',
        statusCode: 409,
        error: 'Conflict',
      });
    }
    return this.usersService.create(createUserDto);
  }
}
