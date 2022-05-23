import { Body, Param, Get, Put, Post, Delete, Controller, ParseIntPipe } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicDTO } from './clinic.dto' 
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Clinic-Route')
@Controller('clinic')
export default class ClinicController {
    
    constructor(private readonly clinicService: ClinicService) {}
    
    @Get("/")
    async getMedicines() {
        return this.clinicService.get_all();
    }

    @Get("/:id")
    async getMedicine(@Param('id', ParseIntPipe) id: number) {
        return this.clinicService.get_unique(id);
    }

    @Post("/")
    async insertMedicine(@Body() clinic: ClinicDTO) {
        return this.clinicService.create(clinic);
    }

    @Delete("/:id")
    async deleteMedicine(@Param('id', ParseIntPipe) id: number) {
        return this.clinicService.delete(id);
    }

    @Put("/:id")
    async updateMedicine(@Param('id', ParseIntPipe) id: number, @Body() clinic: ClinicDTO) {
        return this.clinicService.update(id, clinic);
    }

}