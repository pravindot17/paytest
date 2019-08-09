import { Controller, Post, HttpCode, UseGuards, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthGuard } from '../auth.guard';
import { MakePaymentDto } from './dto/make-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(200)
  makePayment(@Body() makePaymentDto: MakePaymentDto): object {
    return this.paymentService.doPayment(makePaymentDto);
  }
}
