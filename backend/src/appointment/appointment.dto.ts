import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsMilitaryTime } from 'class-validator';


@ApiExtraModels()
export class AppointmentDTO {

    @ApiProperty() @IsMilitaryTime() @IsNotEmpty()
    date: Date;

    @ApiProperty() @IsInt() @IsNotEmpty()
    clinic_id: number;

    @ApiProperty() @IsInt()
    citizen_id: number;

}