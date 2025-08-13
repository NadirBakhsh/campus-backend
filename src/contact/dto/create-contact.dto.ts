import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
    @ApiProperty({ example: 1, description: 'University ID' })
    universityId: number;

    @ApiProperty({ example: 'Admissions Office', description: 'Contact person or office name' })
    name: string;

    @ApiProperty({ example: '+1234567890', description: 'Phone number' })
    phone: string;

    @ApiProperty({ example: 'admissions@university.edu', description: 'Email address' })
    email: string;

    @ApiProperty({ example: 'Admissions', description: 'Category (e.g., Admissions/Finance/Support)' })
    category: string;
}
