import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsArray } from 'class-validator';


@ApiExtraModels()
export class OrderDTO {

    @ApiProperty() @IsDate() @IsNotEmpty()
    order_date: Date;

    @ApiProperty() @IsArray()
    medicines: [];
}



