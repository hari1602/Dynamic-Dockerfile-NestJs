import { Controller, Get } from '@nestjs/common';
import { FirstAppService } from './first-app.service';

@Controller()
export class FirstAppController {
  constructor(private readonly firstAppService: FirstAppService) {}

  @Get()
  getHello(): string {
    return this.firstAppService.getHello();
  }
}
