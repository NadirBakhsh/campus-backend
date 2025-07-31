import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    description: 'The first name of the user',
    example: 'John',
  })
  firstName: string;

  @ApiProperty(
    {
    required: true,
    description: 'The last name of the user',
    example: 'Doe',
    }
  )
  lastName: string;

  @ApiProperty({
    required: true,
    description: 'The email of the user',
    example: 'nadir@me.com',
  })
  email: string;

  @ApiProperty({
    required: true,
    description: 'The password of the user',
    example: 'password123',
  })
  password: string;

  @ApiProperty({
    required: true,
    description: 'The role of the user',
    example: 'STUDENT',
    enum: ['ADMIN', 'STUDENT'],
  })
  role: string;

  @ApiProperty({
    required: true,
    description: 'The status of the user',
    example: 'active',
  })
  status: string;
}
