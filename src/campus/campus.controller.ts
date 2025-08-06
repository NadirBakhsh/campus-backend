import { Body, Controller, Post } from '@nestjs/common';
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
  @ApiOperation({ summary: 'Create a new university' })
  @ApiResponse({ status: 201, description: 'University created successfully.' })
  create(@Body() createCampusDto: CreateCampusDto) {
    return this.campusService.create(createCampusDto);
  }
}
