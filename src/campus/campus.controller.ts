import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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

}
