import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTitle(): string {
    return '<h1>Payment test app!</h1>';
  }
}
