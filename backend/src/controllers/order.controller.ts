import { Body, Param, Get, Post, Controller, Delete, ParseIntPipe } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { OrderDTO } from '../models/order.dto' 
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Order-Route')
@Controller('order')
export default class OrderController {
    
    constructor(private readonly orderService: OrderService) {}
    
    @Get("/:id")
    async getCitizenOrder(@Param('id', ParseIntPipe) id: number) {
       return this.orderService.get_citizen_orders(id);
    }

    @Post("/")
    async insertOrder(@Body() order: OrderDTO) {
        var temp = await this.orderService.create_order(order);
        await this.orderService.create_inventory(temp.order_id, order);
        return temp;
    }

    @Delete("/:id")
    async deleteOrder(@Param('id', ParseIntPipe) id: number) {
        return this.orderService.delete_order(id);
    }

}