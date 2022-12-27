import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  loginPage(){
    return "i am login page";
  }

  login(){
    return "i am login";
  }
}
