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
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',

        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI5MDU1ODRiZDNlM2M2MDNjNmQ0M2Q0IiwiZW1haWwiOiJtYW5oa2llbjk4QGdtYWlsLmNvbSIsImlhdCI6MTY1MzkxNjQ0MCwiZXhwIjoxNjUzOTIzNjQwfQ.4Yu9HCOe-UN7zTsqMQJIbQcb2_c5nrVZOHd7hpke5Zw`,
      },
    });

    return next.handle(req);
  }
  constructor() {}
}
