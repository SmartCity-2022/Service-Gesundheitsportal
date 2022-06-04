import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { PrismaModule } from 'src/prisma/prisma.module';
import ClinicController from '../controllers/clinic.controller';
import { ClinicService } from '../services/clinic.service';


@Module({
    imports: [PrismaModule],
    controllers: [ClinicController],
    providers: [ClinicService]
})


export class ClinicModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware)
        .forRoutes(
            { path: '/clinic', method: RequestMethod.POST },
            { path: '/clinic', method: RequestMethod.PUT },
            { path: '/clinic', method: RequestMethod.DELETE }
        );
    }
}

