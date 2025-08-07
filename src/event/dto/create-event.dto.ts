import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateEventDto {
  @IsNumber()
  campusId: number

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  venue?: string

  @IsDateString()
  date: string

  @IsString()
  type: string

  @IsBoolean()
  @IsOptional()
  isActive?: boolean

  @IsString()
  @IsOptional()
  bannerUrl?: string
}
