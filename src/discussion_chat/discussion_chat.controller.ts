import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { Discussion_ChatService } from './discussion_chat.service';
import { CreateDiscussion_ChatDto } from './dto/create-discussion_chat.dto';
import { UpdateDiscussion_ChatDto } from './dto/update-discussion_chat.dto';
import { Discussion_Chat } from './discussion_chat.entity';

@ApiTags('discussion chat')
@Controller('discussion_chat')
export class Discussion_ChatController {
  constructor(private readonly discussionChatService: Discussion_ChatService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new discussion chat' })
  @ApiBody({ type: CreateDiscussion_ChatDto })
  @ApiResponse({ status: 201, description: 'Discussion chat created', type: Discussion_Chat })
  create(@Body() createDto: CreateDiscussion_ChatDto) {
    return this.discussionChatService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all discussion chats' })
  @ApiResponse({ status: 200, description: 'List of discussion chats', type: [Discussion_Chat] })
  findAll() {
    return this.discussionChatService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a discussion chat by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'The found discussion chat', type: Discussion_Chat })
  @ApiResponse({ status: 404, description: 'Discussion chat not found' })
  findOne(@Param('id') id: string) {
    return this.discussionChatService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a discussion chat by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateDiscussion_ChatDto })
  @ApiResponse({ status: 200, description: 'The updated discussion chat', type: Discussion_Chat })
  @ApiResponse({ status: 404, description: 'Discussion chat not found' })
  update(@Param('id') id: string, @Body() updateDto: UpdateDiscussion_ChatDto) {
    return this.discussionChatService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a discussion chat by id' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Discussion chat removed successfully' })
  @ApiResponse({ status: 404, description: 'Discussion chat not found' })
  remove(@Param('id') id: string) {
    return this.discussionChatService.remove(+id);
  }
}
