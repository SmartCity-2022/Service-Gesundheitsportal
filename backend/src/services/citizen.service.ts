import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CitizenDTO } from '../models/citizen.dto';


@Injectable()
export class CitizenService {

    constructor(private readonly prismaService: PrismaService) {}

    async get_unique(id: string) {
        return this.prismaService.citizen.findUnique({
            where: {
                email: id,
            }
        })
    }

    async create(citizen: CitizenDTO) {
        return this.prismaService.citizen.create({
            data: {
                email: citizen.email,
                street: citizen.street,
                house_number: citizen.house_number
            }
        });
    }

}