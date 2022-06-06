import { Body, Param, Get, Put, Post, Delete, Controller, ParseIntPipe } from '@nestjs/common';
import { ClinicService } from '../services/clinic.service';
import { ClinicDTO } from '../models/clinic.dto' 
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Clinic-Route')
@Controller('clinic')
export default class ClinicController {
    
    constructor(private readonly clinicService: ClinicService) {}
    
    @Get("/")
    async getClinics() {
        return this.clinicService.get_all();
    }

    @Get("/:id")
    async getClinic(@Param('id', ParseIntPipe) id: number) {
        return this.clinicService.get_unique(id);
    }

    @Post("/")
    async insertClinic(@Body() clinic: ClinicDTO) {
        return this.clinicService.create(clinic);
    }

    @Delete("/:id")
    async deleteClinic(@Param('id', ParseIntPipe) id: number) {
        return this.clinicService.delete(id);
    }

    @Put("/:id")
    async updateClinic(@Param('id', ParseIntPipe) id: number, @Body() clinic: ClinicDTO) {
        return this.clinicService.update(id, clinic);
    }

    @Get("/search/:query")
    async search(@Param("query") query: string) {
        return this.clinicService.search(query)
    }

}