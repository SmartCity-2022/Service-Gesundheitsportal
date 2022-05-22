import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsMilitaryTime } from 'class-validator';


@ApiExtraModels()
export class ClinicDTO {

    @ApiProperty() @IsString() @IsNotEmpty()
    title: string;

    @ApiProperty() @IsString() @IsNotEmpty()
    street: string;

    @ApiProperty() @IsString() @IsNotEmpty()
    phone_number: string;

    @ApiProperty() @IsInt() @IsNotEmpty()
    house_number: number;

    @ApiProperty() @IsMilitaryTime() @IsNotEmpty()
    opening_time: Date;

    @ApiProperty() @IsMilitaryTime() @IsNotEmpty()
    closing_time: Date;

    @ApiProperty() @IsInt() @IsNotEmpty()
    owner_id: number;
}