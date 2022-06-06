import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { PrismaModule } from 'src/prisma/prisma.module';
import MedicineController from '../controllers/medicine.controller';
import { MedicineService } from '../services/medicine.service';


@Module({
    imports: [PrismaModule],
    controllers: [MedicineController],
    providers: [MedicineService]
})


export class MedicineModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware)
        .forRoutes(
            { path: '/medicine', method: RequestMethod.POST },
            { path: '/medicine', method: RequestMethod.PUT },
            { path: '/medicine', method: RequestMethod.DELETE }
        );
    }
}
