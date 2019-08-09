import { Injectable } from '@nestjs/common';
import { MakePaymentDto } from './dto/make-payment.dto';

@Injectable()
export class PaymentService {
  doPayment(body: MakePaymentDto) {
    const paymentStatus = this.getPaymentStatus();
    const paymentResponse = { paymentStatus, transactionId: null };
    if (paymentStatus) { paymentResponse.transactionId = this.generateTransactionId(); }
    return paymentResponse;
  }

  private getPaymentStatus() {
    const random = Math.floor((Math.random() * 10) + 1);
    if (random <= 6) { return true; } else { return false; }
  }

  private generateTransactionId(length = 10) {
    return new Array(length).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36); });
  }
}
