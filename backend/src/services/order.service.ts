import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderDTO } from '../models/order.dto';


@Injectable()
export class OrderService {

    constructor(private readonly prismaService: PrismaService) {}

    create_order(id: number, order: OrderDTO) {
        return this.prismaService.order.create({
            data: {
                order_date: order.order_date,
                citizen_id: id,
            }
        }) 
    }

    async create_inventory(id: number, order: OrderDTO) {
        for (let index in order.medicines) {
            await this.prismaService.inventory.create({
                data: {
                    order_id: id,
                    medicine_id: (<any> order.medicines)[index].medicine_id
                }
            })
        }
    }

    get_citizen_orders(id: number) {
        return this.prismaService.order.findMany({
            where: {
                citizen_id: id
            },
            select: {
                order_date: true,
                order_id: true,
                inventory: {
                    select: {
                        medicine: true
                    }
                }
            }
        })
    }

    get_order(id: number) {
        return this.prismaService.order.findUnique({
            where: {
                order_id: id
            },
            select: {
                order_date: true,
                order_id: true,
                inventory: {
                    select: {
                        medicine: true
                    }
                }
            }
        })
    }

    delete_order(id: number) {
        return this.prismaService.order.delete({
            where: {
                order_id: id
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