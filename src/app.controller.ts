import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/login")
  loginPage(){
    return this.appService.loginPage();
  }

  @Post("/login")
  login(){
    return this.appService.login();
  }
}
