import { Controller, Get, Res, Post, HttpCode, UseGuards, Body, BadRequestException } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthGuard } from '../auth.guard';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Post()
  @UseGuards(AuthGuard)
  @HttpCode(200)
  makePayment(@Body() body: any): object {
    if (!body) throw new BadRequestException('Please provide valid request body')
    if (!body.amount) throw new BadRequestException('Please provide valid order amount')
    if (!body.orderId) throw new BadRequestException('Please provide valid order id')
    return this.paymentService.doPayment(body);
  }
}
