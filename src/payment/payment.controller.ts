import { Controller, Get, Res, Post, HttpCode, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthGuard } from '../auth.guard';

@Controller('payment')
export class PaymentController {
  constructor(private readonly appService: PaymentService) { }

  @Get('health')
  checkHealth(@Res() res): object {
    return res.json({ status: 'working' });
  }

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(200)
  makePayment(@Res() res): object {
    return res.json({ paymentStatus: true, transactionId: (Math.random() * 1000000).toString() });
  }
}
