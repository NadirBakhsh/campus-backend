import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Club_ChatService } from './club_chat.service';
import { CreateClub_ChatDto } from './dto/create-club_chat.dto';
import { UpdateClub_ChatDto } from './dto/update-club_chat.dto';
import { Club_Chat } from './club_chat.entity';

@ApiTags('club chat')
@Controller('club_chat')
export class Club_ChatController {
  constructor(private readonly clubChatService: Club_ChatService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new club chat' })
  @ApiBody({ type: CreateClub_ChatDto })
  @ApiResponse({ status: 201, description: 'Chat created', type: Club_Chat })
  create(@Body() createDto: CreateClub_ChatDto) {
    return this.clubChatService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all club chats' })
  @ApiResponse({ status: 200, description: 'List of chats', type: [Club_Chat] })
  findAll() {
    return this.clubChatService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a club chat by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'The found chat', type: Club_Chat })
  @ApiResponse({ status: 404, description: 'Chat not found' })
  findOne(@Param('id') id: string) {
    return this.clubChatService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a club chat by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateClub_ChatDto })
  @ApiResponse({ status: 200, description: 'The updated chat', type: Club_Chat })
  @ApiResponse({ status: 404, description: 'Chat not found' })
  update(@Param('id') id: string, @Body() updateDto: UpdateClub_ChatDto) {
    return this.clubChatService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a club chat by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Chat removed successfully' })
  @ApiResponse({ status: 404, description: 'Chat not found' })
  remove(@Param('id') id: string) {
    return this.clubChatService.remove(+id);
  }
}
