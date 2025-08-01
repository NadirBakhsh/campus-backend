import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

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

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string; user: any } | null> {
    const user = await this.usersService['userRepository'].findOne({
      where: { email },
      select: [
        'id',
        'email',
        'password',
        'role',
        'status',
        'firstName',
        'lastName',
      ],
    });
    if (!user) return null;
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;
    const payload = { sub: user.id, email: user.email, role: user.role };
    // Exclude password from the returned user object
    const { password: _password, ...userWithoutPassword } = user;
    return {
      access_token: this.jwtService.sign(payload),
      user: userWithoutPassword,
    };
  }
}
