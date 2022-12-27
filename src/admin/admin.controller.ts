import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminDto } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private adminServive: AdminService){}

    @Post("/checkAdmin")
    checkAdmin(@Body() admin: adminDto){
        return this.adminServive.findByEmail(admin.email);
    }
}
