import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import ClinicController from './clinic.controller';
import { ClinicService } from './clinic.service';


@Module({
    imports: [PrismaModule],
    controllers: [ClinicController],
    providers: [ClinicService]
})


export class ClinicModule {}
