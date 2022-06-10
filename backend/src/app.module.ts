import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppointmentModule } from './routes/appointment.module';
import { CitizenModule } from './routes/citizen.module';
import { ClinicModule } from './routes/clinic.module';
import { MedicineModule } from './routes/medicine.module';
import { OrderModule } from './routes/order.module';
import { PrismaModule } from './prisma/prisma.module'
import { AuthMiddleware } from './middleware/auth.middleware';
import AppController from './app.controller';


@Module({
    imports: [
        PrismaModule,
        OrderModule,
        MedicineModule,
        ClinicModule,
        AppointmentModule,
        CitizenModule
    ],
    controllers: [AppController],
    providers: []
})


export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(AuthMiddleware).forRoutes("/auth")
    }
}
