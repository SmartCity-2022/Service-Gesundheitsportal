import { Body, Param, Get, Put, Post, Delete, Controller, ParseIntPipe, Res, Req } from '@nestjs/common';
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
    async getCitizenAppointments(@Req() req: any) {
        var citizen = await this.appointmentService.get_unique(req.body.email);
        return this.appointmentService.get_citizen_appointments(citizen.citizen_id);
    }

    @Get("/clinic/:id")
    async getClinicAppointments(@Param('id', ParseIntPipe) id: number) {
        return this.appointmentService.get_clinic_appointments(id);
    }

    @Delete("/:id")
    async deleteClinicAppointment(@Param('id', ParseIntPipe) id: number) {
        return this.appointmentService.delete_appointment(id);
    }

    @Put("/:id")
    async createCitizenAppointment(@Req() req: any, @Param('id', ParseIntPipe) id: number) {
        var citizen = await this.appointmentService.get_unique(req.body.email);
        return this.appointmentService.update_appointment(id, citizen.citizen_id);
    }

}