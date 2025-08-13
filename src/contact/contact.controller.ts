import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './contact.entity';

@ApiTags('contacts')
@Controller('contacts')
export class ContactController {
    constructor(private readonly contactService: ContactService) {}

    @Post()
    @ApiOperation({ summary: 'Create a new contact' })
    @ApiBody({ type: CreateContactDto })
    @ApiResponse({ status: 201, description: 'Contact created', type: Contact })
    create(@Body() createContactDto: CreateContactDto) {
        return this.contactService.create(createContactDto);
    }

    @Get()
    @ApiOperation({ summary: 'Get all contacts' })
    @ApiResponse({ status: 200, description: 'List of contacts', type: [Contact] })
    findAll() {
        return this.contactService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a contact by id' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Contact found', type: Contact })
    findOne(@Param('id') id: string) {
        return this.contactService.findOne(Number(id));
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a contact by id' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateContactDto })
    @ApiResponse({ status: 200, description: 'Contact updated', type: Contact })
    update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
        return this.contactService.update(Number(id), updateContactDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a contact by id' })
    @ApiParam({ name: 'id', type: Number })
    @ApiResponse({ status: 200, description: 'Contact deleted' })
    remove(@Param('id') id: string) {
        return this.contactService.remove(Number(id));
    }
}
