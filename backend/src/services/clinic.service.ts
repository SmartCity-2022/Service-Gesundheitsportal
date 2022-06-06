import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ClinicDTO } from '../models/clinic.dto';


@Injectable()
export class ClinicService {

    constructor(private readonly prismaService: PrismaService) {}

    async get_all() {
        return this.prismaService.clinic.findMany();
    }

    async get_unique(id: number) {
        return this.prismaService.clinic.findUnique({
            where: {
                clinic_id: id,
            }
        })
    }

    async create(clinic: ClinicDTO) {
        return this.prismaService.clinic.create({
            data: {
                title: clinic.title,
                street: clinic.street,
                phone_number: clinic.phone_number,
                house_number: clinic.house_number,
                opening_time: clinic.closing_time,
                closing_time: clinic.closing_time,
                owner_id: clinic.owner_id
            }
        });
    }

    async delete(id: number) {
        return this.prismaService.clinic.delete({
            where: {
                clinic_id: id
            }
        })
    }

    async update(id: number, clinic: ClinicDTO) {
        return this.prismaService.clinic.update({
            where: {
                clinic_id: id
            },
            data: {
                title: clinic.title,
                street: clinic.street,
                phone_number: clinic.phone_number,
                house_number: clinic.house_number,
                opening_time: clinic.closing_time,
                closing_time: clinic.closing_time,
                owner_id: clinic.owner_id
            }
        })
    }

    async search(query: string) {
        return this.prismaService.clinic.findMany({
            where: {
                OR: [
                    { title: { contains: query } },
                    { street: { contains: query } },
                    { phone_number: { contains: query } }
                ]
            }
        })
    }

}