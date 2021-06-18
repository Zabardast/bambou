import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './service/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly auth: LoginService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.jwt !== '') {
      const req = request.clone({
        headers: request.headers.append(
          'Authorization',
          'Bearer ' + this.auth.jwt
        ),
      });
      return next.handle(req);
    }
    return next.handle(request);
  }
}