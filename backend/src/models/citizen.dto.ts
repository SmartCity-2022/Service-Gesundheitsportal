import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsEmail } from 'class-validator';


@ApiExtraModels()
export class CitizenDTO {

    @ApiProperty() @IsEmail() @IsNotEmpty()
    email: string;

    @ApiProperty() @IsString() @IsNotEmpty()
    street: string;

    @ApiProperty() @IsInt() @IsNotEmpty()
    house_number: number;

}