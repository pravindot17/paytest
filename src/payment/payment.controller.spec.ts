import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

describe('Payment Controller', () => {
  let paymentController: PaymentController;
  let paymentService: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [PaymentService],
    }).compile();

    paymentController = module.get<PaymentController>(PaymentController);
    paymentService = module.get<PaymentService>(PaymentService);
  });

  describe('BAD CASES', () => {
    it('Invalid request body received', () => {
      let body = null
      expect(() => paymentController.makePayment(body)).toThrowError('Please provide valid request body')
    });

    it('Invalid order amount passed', () => {
      let body = { amount: null, orderId: 'this_is_random_order_id' }
      expect(() => paymentController.makePayment(body)).toThrowError('Please provide valid order amount')
    });

    it('Invalid order amount passed', () => {
      let body = { amount: 200.19, orderId: null }
      expect(() => paymentController.makePayment(body)).toThrowError('Please provide valid order id')
    });
  });

  describe('HAPPY CASES', () => {
    it('payment done successfully', () => {
      jest.spyOn(paymentService, 'doPayment').mockImplementation(() => {
        return { paymentStatus: true, transactionId: 'zn0y20aos5' }
      });
      let body = { amount: 999, orderId: 'this_is_random_order_id' }
      let paymentResponse = paymentController.makePayment(body);
      expect(paymentResponse).toEqual({ paymentStatus: true, transactionId: 'zn0y20aos5' });
    });

    it('payment failed', () => {
      jest.spyOn(paymentService, 'doPayment').mockImplementation(() => {
        return { paymentStatus: false, transactionId: null }
      });
      let body = { amount: 1000.12, orderId: 'this_is_random_order_id2' }
      let paymentResponse = paymentController.makePayment(body);
      expect(paymentResponse).toEqual({ paymentStatus: false, transactionId: null });
    });
  });
});
