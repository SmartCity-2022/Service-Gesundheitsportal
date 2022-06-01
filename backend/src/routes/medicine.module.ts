import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import MedicineController from '../controllers/medicine.controller';
import { MedicineService } from '../services/medicine.service';


@Module({
    imports: [PrismaModule],
    controllers: [MedicineController],
    providers: [MedicineService]
})


export class MedicineModule {}
