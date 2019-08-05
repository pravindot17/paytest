import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentService],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
  });

  it('do payment', () => {
    let response = service.doPayment({ amount: 1000, orderId: 'new_ID' });
    expect(response.paymentStatus === true || response.paymentStatus === false).toEqual(true);
    expect(response.transactionId === null || typeof response.transactionId === 'string').toEqual(true);
  });
});
