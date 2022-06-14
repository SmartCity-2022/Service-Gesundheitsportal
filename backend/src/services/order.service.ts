import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderDTO } from '../models/order.dto';


@Injectable()
export class OrderService {

    constructor(private readonly prismaService: PrismaService) {}

    create_order(order: OrderDTO) {
        return this.prismaService.order.create({
            data: {
                order_date: order.order_date,
                citizen_id: order.citizen_id,
            }
        }) 
    }

    async create_inventory(id: number, order: OrderDTO) {
        for (let i = 0; i < order.medicine_id.length; i++) {
            await this.prismaService.inventory.create({
                data: {
                    order_id: id,
                    medicine_id: order.medicine_id[i]
                }
            })
        }
    }

    get_citizen_orders(id: number) {
        return this.prismaService.order.findMany({
            where: {
                citizen_id: id
            },
            include: {
                inventory: {
                    include: {
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