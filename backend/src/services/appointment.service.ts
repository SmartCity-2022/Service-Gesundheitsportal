import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AppointmentDTO } from '../models/appointment.dto';


@Injectable()
export class AppointmentService {

    constructor(private readonly prismaService: PrismaService) {}

    get_citizen_appointments(id: number) {
        return this.prismaService.appointment.findMany({
            where: {
                citizen_id: id
            }
        })
    }

    get_clinic_appointments(id: number) {
        return this.prismaService.appointment.findMany({
            where: {
                clinic_id: id 
            }
        })
    }

    create_appointment(appointment: AppointmentDTO) {
        return this.prismaService.appointment.create({
            data: {
                date: appointment.date,
                clinic_id: appointment.clinic_id,
                citizen_id: appointment.citizen_id 
            }
        })
    }

    update_appointment(appointment: number, citizen: number) {
        return this.prismaService.appointment.update({
            where: {
                appointment_id: appointment
            },
            data: {
                citizen_id: citizen
            }
        })
    }

    delete_appointment(id: number) {
        return this.prismaService.appointment.delete({
            where: {
                appointment_id: id
            }
        })
    }

    async get_unique(id: string) {
        return this.prismaService.citizen.findUnique({
            where: {
                email: id,
            }
        })
    }

}