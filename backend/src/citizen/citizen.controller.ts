import { Body, Param, Get, Post, Controller } from '@nestjs/common';
import { CitizenService } from './citizen.service';
import { CitizenDTO } from './citizen.dto' 
import { ApiTags } from '@nestjs/swagger';
import { listen } from 'src/rabbitmq/index'


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

        var s;

        listen('exchange', 'service.hello', (secrect: any) => {
            s = secrect; 
        })

        console.log(s)

        return this.citizenService.create(citizen);
    }

}