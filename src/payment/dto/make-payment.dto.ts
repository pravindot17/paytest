import { IsString, Length, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class MakePaymentDto {
  @IsString() @Length(10, 40)
  public orderId: string;

  @IsNumber()
  public readonly totalAmount: number;

  @ValidateNested({ each: true })
  @Type(() => PaymentInfoDto)
  public readonly paymentDetails: PaymentInfoDto;
}

class PaymentInfoDto {
  @IsString() @Length(3, 64)
  public readonly method: string;

  @IsString() @Length(12, 20)
  public readonly cardNumber: string;

  @IsString() @Length(5)
  public readonly expiry: string;

  @IsString() @Length(4)
  public readonly pin: string;
}