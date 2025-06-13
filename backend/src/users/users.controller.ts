/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';

@Controller()
export class UsersController {
  @Get()
  home() {
    return "Hello from UsersController"
  }
}
