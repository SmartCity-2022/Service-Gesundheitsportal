import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import CitizenController from './citizen.controller';
import { CitizenService } from './citizen.service';


@Module({
    imports: [PrismaModule],
    controllers: [CitizenController],
    providers: [CitizenService]
})


export class CitizenModule {}
