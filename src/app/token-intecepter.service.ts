import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenIntecepterService implements HttpInterceptor {
  private token = JSON.parse(localStorage.getItem('user') || '')?.token;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',

        Authorization: `Bearer ${this.token}`,
      },
    });

    return next.handle(req);
  }
  constructor() {}
}
