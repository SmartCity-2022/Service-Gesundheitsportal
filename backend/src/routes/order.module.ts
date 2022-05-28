import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import OrderController from '../controllers/order.controller';
import { OrderService } from '../services/order.service';


@Module({
    imports: [PrismaModule],
    controllers: [OrderController],
    providers: [OrderService]
})


export class OrderModule {}
