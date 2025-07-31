import { Controller, Post, Body, UnauthorizedException, ConflictException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @ApiOperation({ summary: 'Register a new user' })
    @ApiBody({ type: CreateUserDto })
    @ApiResponse({ status: 201, description: 'User registered', type: CreateUserDto })
    @ApiResponse({ status: 409, description: 'User already exists' })
    async register(@Body() createUserDto: CreateUserDto) {
        try {
            return await this.authService.register(createUserDto);
        } catch (error) {
            if (error instanceof ConflictException) {
                throw new ConflictException('User already exists');
            }
            throw error;
        }
    }

    @Post('login')
    @ApiOperation({ summary: 'Login user and get JWT token' })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                email: { type: 'string', example: 'nadir@me.com' },
                password: { type: 'string', example: 'password123' }
            },
            required: ['email', 'password']
        }
    })
    @ApiResponse({ status: 200, description: 'JWT token returned', schema: {
        type: 'object',
        properties: {
            access_token: { type: 'string', example: 'jwt.token.here' }
        }
    }})
    @ApiResponse({ status: 401, description: 'Invalid credentials' })
    async login(@Body() body: { email: string; password: string }) {
        // ...implement login logic in AuthService...
        throw new UnauthorizedException('Not implemented');
    }
}
