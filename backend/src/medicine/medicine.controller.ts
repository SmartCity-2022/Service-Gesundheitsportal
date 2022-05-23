import { Body, Param, Get, Put, Post, Delete, Controller, ParseIntPipe } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineDTO } from './medicine.dto' 
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Medicine-Route')
@Controller('/medicine')
export default class MedicineController {
    
    constructor(private readonly medicineService: MedicineService) {}
    
    @Get("/")
    async getMedicines() {
        return this.medicineService.get_all();
    }

    @Get("/:id")
    async getMedicine(@Param('id', ParseIntPipe) id: number) {
        return this.medicineService.get_unique(id);
    }

    @Post("/")
    async insertMedicine(@Body() medicine: MedicineDTO) {
        return this.medicineService.create(medicine);
    }

    @Delete("/:id")
    async deleteMedicine(@Param('id', ParseIntPipe) id: number) {
        return this.medicineService.delete(id);
    }

    @Put("/:id")
    async updateMedicine(@Param('id', ParseIntPipe) id: number, @Body() medicine: MedicineDTO) {
        return this.medicineService.update(id, medicine);
    }

}