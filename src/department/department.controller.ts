import { ApiTags, ApiOperation, ApiBody, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('department')
@ApiTags('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a department' })
  @ApiBody({ type: CreateDepartmentDto })
  @ApiResponse({ status: 201, type: CreateDepartmentDto })
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find all departments' })
  @ApiResponse({ status: 200, type: [CreateDepartmentDto] })
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a department by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, type: CreateDepartmentDto })
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a department by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateDepartmentDto })
  @ApiResponse({ status: 200, type: UpdateDepartmentDto })
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a department by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200 })
  remove(@Param('id') id: string) {
    return this.departmentService.remove(+id);
  }
}
