import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversityService } from './university.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

@ApiTags('University')
@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new university' })
  @ApiResponse({ status: 201, description: 'University created successfully.' })
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universityService.create(createUniversityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all universities' })
  @ApiResponse({ status: 200, description: 'List of universities.' })
  findAll() {
    return this.universityService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get university by ID' })
  @ApiParam({ name: 'id', description: 'University ID' })
  @ApiResponse({ status: 200, description: 'University found.' })
  @ApiResponse({ status: 404, description: 'University not found.' })
  findOne(@Param('id') id: string) {
    return this.universityService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update university by ID' })
  @ApiParam({ name: 'id', description: 'University ID' })
  @ApiResponse({ status: 200, description: 'University updated.' })
  @ApiResponse({ status: 404, description: 'University not found.' })
  update(@Param('id') id: string, @Body() updateUniversityDto: UpdateUniversityDto) {
    return this.universityService.update(+id, updateUniversityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete university by ID' })
  @ApiParam({ name: 'id', description: 'University ID' })
  @ApiResponse({ status: 200, description: 'University deleted.' })
  @ApiResponse({ status: 404, description: 'University not found.' })
  remove(@Param('id') id: string) {
    return this.universityService.remove(+id);
  }
}
