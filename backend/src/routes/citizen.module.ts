import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import CitizenController from '../controllers/citizen.controller';
import { CitizenService } from '../services/citizen.service';


@Module({
    imports: [PrismaModule],
    controllers: [CitizenController],
    providers: [CitizenService]
})


export class CitizenModule {}
