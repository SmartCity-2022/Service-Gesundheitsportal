import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MedicineDTO } from '../models/medicine.dto';


@Injectable()
export class MedicineService {

    constructor(private readonly prismaService: PrismaService) {}

    async get_all() {
        return this.prismaService.medicine.findMany();
    }

    async get_unique(id: number) {
        return this.prismaService.medicine.findUnique({
            where: {
                medicine_id: id,
            }
        })
    }

    async create(medicine: MedicineDTO) {
        return this.prismaService.medicine.create({
            data: {
                title: medicine.title,
                content: medicine.content,
                pharmacy_duty: medicine.pharmacy_duty,
                effect: medicine.effect
            }
        });
    }

    async delete(id: number) {
        return this.prismaService.medicine.delete({
            where: {
                medicine_id: id
            }
        })
    }

    async update(id: number, medicine: MedicineDTO) {
        return this.prismaService.medicine.update({
            where: {
                medicine_id: id
            },
            data: {
                title: medicine.title,
                content: medicine.content,
                pharmacy_duty: medicine.pharmacy_duty,
                effect: medicine.effect
            }
        })
    }

}