import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  @ApiOperation({ summary: 'Creates a new notification' })
  @ApiResponse({ status: 201, description: 'The created notification' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  @ApiOperation({ summary: 'Finds all the notifications' })
  @ApiResponse({ status: 200, description: 'The list of notifications' })
  findAll() {
    return this.notificationService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Finds a notification by its id' })
  @ApiResponse({ status: 200, description: 'The notification' })
  @ApiResponse({ status: 404, description: 'The notification was not found' })
  findOne(@Param('id') id: string) {
    return this.notificationService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates a notification' })
  @ApiResponse({ status: 200, description: 'The updated notification' })
  @ApiResponse({ status: 404, description: 'The notification was not found' })
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return this.notificationService.update(+id, updateNotificationDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Removes a notification' })
  @ApiResponse({ status: 200, description: 'The status of the removal' })
  @ApiResponse({ status: 404, description: 'The notification was not found' })
  remove(@Param('id') id: string) {
    return this.notificationService.remove(+id);
  }
}
