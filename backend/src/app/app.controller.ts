import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  serverUp() {
    return 'The server is running...';
  }
}
