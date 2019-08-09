import { IsString, Length, ValidateNested, IsNumber, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

class PaymentInfoDto {
  @IsNotEmpty() @IsString()
  public readonly method: string;

  @IsNotEmpty() @IsString() @Length(12, 20)
  public readonly cardNumber: string;

  @IsNotEmpty() @IsString() @Length(5)
  public readonly expiry: string;

  @IsNotEmpty() @IsString() @Length(4)
  public readonly pin: string;
}

export class MakePaymentDto {
  @IsNotEmpty() @IsString() @Length(5, 40)
  public orderId: string;

  @IsNotEmpty() @IsNumber()
  public readonly totalAmount: number;

  @ValidateNested({ each: true })
  @Type(() => PaymentInfoDto)
  public readonly paymentDetails: PaymentInfoDto;
}
