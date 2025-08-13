import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { University } from '../university/university.entity';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
        @InjectRepository(University)
        private universityRepository: Repository<University>,
    ) {}

    async create(createContactDto: CreateContactDto): Promise<Contact> {
        const contact = this.contactRepository.create(createContactDto);
        return this.contactRepository.save(contact);
    }

    async findAll(): Promise<Contact[]> {
        return this.contactRepository.find();
    }

    async findOne(id: number): Promise<Contact> {
        const contact = await this.contactRepository.findOne({ where: { id } });
        if (!contact) {
            throw new NotFoundException('Contact not found');
        }
        return contact;
    }

    async update(id: number, updateContactDto: UpdateContactDto): Promise<Contact> {
        await this.findOne(id);
        await this.contactRepository.update(id, updateContactDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        const result = await this.contactRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('Contact not found');
        }
    }
}
