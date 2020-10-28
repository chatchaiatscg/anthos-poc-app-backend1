import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('v2')
  getHelloV2(): string {
    return this.appService.getHello();
  }

  @Get('v3')
  getHelloV3(): string {
    return this.appService.getHello();
  }

  @Get('v4')
  getHelloV4(): string {
    return this.appService.getHello();
  }
}
