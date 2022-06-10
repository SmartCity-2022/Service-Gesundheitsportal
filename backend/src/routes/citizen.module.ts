import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { PrismaModule } from 'src/prisma/prisma.module';
import CitizenController from '../controllers/citizen.controller';
import { CitizenService } from '../services/citizen.service';


@Module({
    imports: [PrismaModule],
    controllers: [CitizenController],
    providers: [CitizenService]
})


export class CitizenModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthMiddleware)
        .forRoutes("/citizen")
    }
}
