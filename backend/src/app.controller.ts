import { Get, Controller, Res } from '@nestjs/common';


@Controller('auth')
export default class AppController {
    
    @Get("/")
    async check_auth() {
        return { auth : true }
    }

}