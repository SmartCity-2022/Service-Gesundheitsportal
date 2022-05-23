import { Module } from '@nestjs/common';
import { AppointmentModule } from './appointment/appointment.module';
import { CitizenModule } from './citizen/citizen.module';
import { ClinicModule } from './clinic/clinic.module';
import { MedicineModule } from './medicine/medicine.module';
import { OrderModule } from './order/order.module';
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
