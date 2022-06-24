import { Body, Param, Get, Post, Controller, Delete, ParseIntPipe, Req } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { OrderDTO } from '../models/order.dto' 
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Order-Route')
@Controller('order')
export default class OrderController {
    
    constructor(private readonly orderService: OrderService) {}
    
    @Get("/citizen/:id")
    async getOrder(@Param('id', ParseIntPipe) id: number) {
        return this.orderService.get_order(id);
    }

    @Get("/citizen")
    async getCitizenOrder(@Req() req: any) {
        var citizen = await this.orderService.get_unique(req.body.email);
        return this.orderService.get_citizen_orders(citizen.citizen_id);
    }

    @Post("/")
    async insertOrder(@Req() req: any, @Body() order: OrderDTO) {
        var citizen = await this.orderService.get_unique(req.body.email);
        var temp = await this.orderService.create_order(citizen.citizen_id, order);
        await this.orderService.create_inventory(temp.order_id, order);
        return temp;
    }

    @Delete("/:id")
    async deleteOrder(@Param('id', ParseIntPipe) id: number) {
        return this.orderService.delete_order(id);
    }

}