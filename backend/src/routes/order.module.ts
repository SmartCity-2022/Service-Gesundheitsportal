import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { PrismaModule } from 'src/prisma/prisma.module';
import OrderController from '../controllers/order.controller';
import { OrderService } from '../services/order.service';


@Module({
    imports: [PrismaModule],
    controllers: [OrderController],
    providers: [OrderService]
})


export class OrderModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware)
        .forRoutes("/order")
    }
}