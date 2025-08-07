import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';
import { EnrollmentService } from './enrollment.service';

@ApiTags('Enrollment')
@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new enrollment' })
  @ApiResponse({
    status: 201,
    description: 'The enrollment has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Invalid data.' })
  create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    return this.enrollmentService.create(createEnrollmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all enrollments' })
  @ApiResponse({ status: 200, description: 'List of enrollments.' })
  findAll() {
    return this.enrollmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific enrollment by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID of the enrollment' })
  @ApiResponse({ status: 200, description: 'Enrollment details.' })
  @ApiResponse({ status: 404, description: 'Enrollment not found.' })
  findOne(@Param('id') id: string) {
    return this.enrollmentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an enrollment by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID of the enrollment' })
  @ApiResponse({
    status: 200,
    description: 'The enrollment has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Enrollment not found.' })
  update(
    @Param('id') id: string,
    @Body() updateEnrollmentDto: UpdateEnrollmentDto,
  ) {
    return this.enrollmentService.update(+id, updateEnrollmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an enrollment by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'ID of the enrollment' })
  @ApiResponse({
    status: 200,
    description: 'The enrollment has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Enrollment not found.' })
  remove(@Param('id') id: string) {
    return this.enrollmentService.remove(+id);
  }
}
