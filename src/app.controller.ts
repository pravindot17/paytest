import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('health')
  checkHealth(@Res() res): object {
    return res.json({ status: 'working' });
  }

  @Get()
  getTitle(@Res() res): string {
    return res.send(this.appService.getTitle());
  }
}
