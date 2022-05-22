import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsArray, IsNumber } from 'class-validator';


@ApiExtraModels()
export class OrderDTO {

    @ApiProperty() @IsDate() @IsNotEmpty()
    order_date: Date;

    @ApiProperty() @IsInt() @IsNotEmpty()
    citizen_id: number;

    @ApiProperty() @IsNumber({}, { each: true })
    medicine_id: number[];
}



