import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CampusService } from './campus.service';
import { CreateCampusDto } from './dto/create-campus.dto';
import { CreateUniversityDto } from 'src/university/dto/create-university.dto';
@ApiTags('Campus')
@Controller('campus')
export class CampusController {
  constructor(private readonly campusService: CampusService) {}

  // create endpoint
  @Post()
  @ApiOperation({ summary: 'Create a new campus' })
  @ApiResponse({ status: 201, description: 'The campus has been successfully created' })
  create(@Body() createCampusDto: CreateCampusDto) {
    return this.campusService.create(createCampusDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all campus' })
  @ApiResponse({ status: 200, description: 'List of campus.' })
  findAll() {
    return this.campusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get campus by ID' })
  @ApiParam({ name: 'id', description: 'Campus ID' })
  @ApiResponse({ status: 200, description: 'Campus found.' })
  @ApiResponse({ status: 404, description: 'Campus not found.' })
  findOne(@Param('id') id: string) {
    return this.campusService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete campus by ID' })
  @ApiParam({ name: 'id', description: 'Campus ID' })
  @ApiResponse({ status: 200, description: 'Campus deleted.' })
  @ApiResponse({ status: 404, description: 'Campus not found.' })
  remove(@Param('id') id: string) {
    return this.campusService.remove(+id);
  }

}
