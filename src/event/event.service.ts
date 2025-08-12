import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}
  async create(createEventDto: CreateEventDto) {
    const isEventExists = await this.eventRepository.findOne({
      where: {
        title: createEventDto.title,
      },
    });

    if (isEventExists) {
      throw new BadRequestException(
        'Event with the same date and title already exists',
        {
          description: 'An event with this date and title already exists.',
        },
      );
    }

    const event = this.eventRepository.create(createEventDto);
    try {
      return await this.eventRepository.save(event);
    } catch (error) {
      throw new BadRequestException('Failed to create event', {
        cause: error,
        description: 'Failed to create event due to a database error.',
      });
    }
  }

  async findAll() {
    try {
      return await this.eventRepository.find();
    } catch (error) {
      throw new BadRequestException('Failed to retrieve events', {
        cause: error,
        description: 'An error occurred while fetching the event list.',
      });
    }
  }

  async findOne(id: number) {
    const event = await this.eventRepository.findOneBy({ id });
    if (!event) {
      throw new BadRequestException('Event not found', {
        description: 'No event found with the provided ID.',
      });
    }
    return event;
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.eventRepository.preload({
      id,
      ...updateEventDto,
    });
    if (!event) {
      throw new BadRequestException('Event not found', {
        description: 'No event found with the provided ID.',
      });
    }
    try {
      return await this.eventRepository.save(event);
    } catch (error) {
      throw new BadRequestException('Failed to update event', {
        cause: error,
        description: 'Failed to update event due to a database error.',
      });
    }
  }

  async remove(id: number) {
    const event = await this.eventRepository.findOneBy({ id });
    if (!event) {
      throw new BadRequestException('Event not found', {
        description: 'No event found with the provided ID.',
      });
    }
    try {
      return await this.eventRepository.remove(event);
    } catch (error) {
      throw new BadRequestException('Failed to remove event', {
        cause: error,
        description: 'Failed to remove event due to a database error.',
      });
    }
  }
}
