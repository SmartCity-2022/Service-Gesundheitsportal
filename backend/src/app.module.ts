import { Module } from '@nestjs/common';
import { AppointmentModule } from './routes/appointment.module';
import { CitizenModule } from './routes/citizen.module';
import { ClinicModule } from './routes/clinic.module';
import { MedicineModule } from './routes/medicine.module';
import { OrderModule } from './routes/order.module';
import { PrismaModule } from './prisma/prisma.module'


@Module({
    imports: [
        PrismaModule,
        OrderModule,
        MedicineModule,
        ClinicModule,
        AppointmentModule,
        CitizenModule
    ],
    controllers: [],
    providers: []
})


export class AppModule {}
