import { Body, Param, Get, Put, Post, Delete, Controller, ParseIntPipe, Res } from '@nestjs/common';
import { AppointmentDTO } from '../models/appointment.dto'
import { AppointmentService } from '../services/appointment.service'; 
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Appointment-Route')
@Controller('appointment')
export default class AppointmentController {
    
    constructor(private readonly appointmentService: AppointmentService) {}

    @Post("/")
    async createClinicAppointment(@Body() appointment: AppointmentDTO) {
        return this.appointmentService.create_appointment(appointment);
    }

    @Get("/citizen")
    async getCitizenAppointments(@Res() res: any) {
        var response = res.locals.email
        var citizen = await this.appointmentService.get_unique(response.email);
        console.log(await this.appointmentService.get_citizen_appointments(citizen.citizen_id))
        return await this.appointmentService.get_citizen_appointments(citizen.citizen_id);
    }

    @Get("/clinic/:id")
    async getClinicAppointments(@Param('id', ParseIntPipe) id: number) {
        return this.appointmentService.get_clinic_appointments(id);
    }

    @Delete("/:id")
    async deleteClinicAppointment(@Param('id', ParseIntPipe) id: number) {
        return this.appointmentService.delete_appointment(id);
    }

    @Put("/:id/:citizen")
    async createCitizenAppointment(
        @Param('id', ParseIntPipe) id: number,
        @Param('citizen', ParseIntPipe) citizen: number
    ) {
        return this.appointmentService.update_appointment(id, citizen);
    }

}