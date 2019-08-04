import { Controller, Get, Res, Post, HttpCode } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly appService: PaymentService) { }

  @Get('health')
  checkHealth(@Res() res): object {
    return res.json({ status: 'working' });
  }

  @Post()
  @HttpCode(200)
  makePayment(@Res() res): object {
    return res.json({ paymentStatus: true, transactionId: (Math.random() * 1000000).toString() });
  }
}
