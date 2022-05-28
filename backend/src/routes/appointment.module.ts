import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import AppointmentController from '../controllers/appointment.controller';
import { AppointmentService } from '../services/appointment.service';


@Module({
    imports: [PrismaModule],
    controllers: [AppointmentController],
    providers: [AppointmentService]
})


export class AppointmentModule {}
