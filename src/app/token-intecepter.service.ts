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

        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI5MDU1ODRiZDNlM2M2MDNjNmQ0M2Q0IiwiZW1haWwiOiJtYW5oa2llbjk4QGdtYWlsLmNvbSIsImlhdCI6MTY1MzkwNTA0MywiZXhwIjoxNjUzOTEyMjQzfQ.mHLDNYW6C3AuFersSmk014rboklzjEiApVvKh59e9mQ`,
      },
    });

    return next.handle(req);
  }
  constructor() {}
}
