import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();
    if (!process.env.AUTH) { throw new ForbiddenException('Authorization is not set in node enviroment variable AUTH'); }
    if (!request.headers.authorization) { throw new ForbiddenException('Authorization is not passed in request headers'); }

    if (request.headers.authorization === process.env.AUTH) { return true; }
    return false;
  }
}
