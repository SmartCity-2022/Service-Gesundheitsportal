import { Body, Param, Get, Post, Controller } from '@nestjs/common';
import { CitizenService } from '../services/citizen.service';
import { CitizenDTO } from '../models/citizen.dto' 
import { ApiTags } from '@nestjs/swagger';
import { listen } from 'src/rabbitmq'


@ApiTags('Citizen-Route')
@Controller('citizen')
export default class CitizenController {
    
    constructor(private readonly citizenService: CitizenService) {}
    
    @Get("/:id")
    async getCitizen(@Param('id') id: string) {
        return this.citizenService.get_unique(id);
    }

    @Post("/")
    async insertCitizen(@Body() citizen: CitizenDTO) {
        return this.citizenService.create(citizen);
    }

}