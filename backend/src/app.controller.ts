import { Get, Controller, Post } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {

    constructor(private prismaServer: PrismaService) {}

    @Get("test")
    getElement() {
        var user = this.prismaServer.user.findMany();
        return user;
    }

}