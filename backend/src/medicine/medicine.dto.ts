import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsBoolean, IsNotEmpty } from 'class-validator';


@ApiExtraModels()
export class MedicineDTO {

    @ApiProperty() @IsString() @IsNotEmpty()
    title: string;

    @ApiProperty() @IsInt() @IsNotEmpty()
    content: number;

    @ApiProperty() @IsBoolean() @IsNotEmpty()
    pharmacy_duty: boolean;

    @ApiProperty() @IsString() @IsNotEmpty()
    effect: string;
}



