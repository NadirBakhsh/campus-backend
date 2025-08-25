import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserClubService } from './user-club.service';
import { CreateUserClubDto } from './dto/create-user-club.dto';
import { UpdateUserClubDto } from './dto/update-user-club.dto';

@ApiTags('user-club')
@Controller('user-club')
export class UserClubController {
  constructor(private readonly userClubService: UserClubService) {}

  @Post()
  @ApiOperation({ summary: 'Create a user-club relation' })
  @ApiBody({ type: CreateUserClubDto })
  @ApiResponse({ status: 201, description: 'UserClub relation created.' })
  create(@Body() createUserClubDto: CreateUserClubDto) {
    return this.userClubService.create(createUserClubDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all user-club relations' })
  @ApiResponse({ status: 200, description: 'List of user-club relations.' })
  findAll() {
    return this.userClubService.findAll();
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user-club relations by userId' })
  @ApiParam({ name: 'userId', type: Number })
  @ApiResponse({ status: 200, description: 'User-club relation found.' })
  findOne(@Param('userId') userId: string) {
    return this.userClubService.findOne(+userId);
  }

  @Patch(':userId')
  @ApiOperation({ summary: 'Update a user-club relation by userId and clubId' })
  @ApiParam({ name: 'userId', type: Number })
  @ApiBody({ type: UpdateUserClubDto })
  @ApiResponse({ status: 200, description: 'User-club relation updated.' })
  update(@Param('userId') userId: string, @Body() updateUserClubDto: UpdateUserClubDto) {
    return this.userClubService.update(+userId, updateUserClubDto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete a user-club relation by userId' })
  @ApiParam({ name: 'userId', type: Number })
  @ApiResponse({ status: 200, description: 'User-club relation deleted.' })
  remove(@Param('userId') userId: string) {
    return this.userClubService.remove(+userId);
  }
}
