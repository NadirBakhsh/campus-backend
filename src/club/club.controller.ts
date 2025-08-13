import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './club.entity';

@ApiTags('club')
@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new club' })
  @ApiBody({ type: CreateClubDto })
  @ApiResponse({ status: 201, description: 'The club has been successfully created.', type: Club })
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubService.create(createClubDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all clubs' })
  @ApiResponse({ status: 200, description: 'List of clubs', type: [Club] })
  findAll() {
    return this.clubService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a club by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'The found club', type: Club })
  @ApiResponse({ status: 404, description: 'Club not found' })
  findOne(@Param('id') id: string) {
    return this.clubService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a club by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateClubDto })
  @ApiResponse({ status: 200, description: 'The updated club', type: Club })
  @ApiResponse({ status: 404, description: 'Club not found' })
  update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
    return this.clubService.update(+id, updateClubDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a club by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Club removed successfully' })
  @ApiResponse({ status: 404, description: 'Club not found' })
  remove(@Param('id') id: string) {
    return this.clubService.remove(+id);
  }
}
