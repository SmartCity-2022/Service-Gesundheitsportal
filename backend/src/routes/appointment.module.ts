import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { PrismaModule } from 'src/prisma/prisma.module';
import AppointmentController from '../controllers/appointment.controller';
import { AppointmentService } from '../services/appointment.service';


@Module({
    imports: [PrismaModule],
    controllers: [AppointmentController],
    providers: [AppointmentService]
})


export class AppointmentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware)
        .forRoutes(
            { path: '/appointment', method: RequestMethod.POST },
            { path: '/appointment', method: RequestMethod.PUT },
            { path: '/appointment', method: RequestMethod.DELETE },
            { path: '/appointment/citizen/', method: RequestMethod.GET }
        )
    }
}
