import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { SigninService } from 'src/components/login/service/signin.service';
@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private signinService: SigninService, private http: HttpClient) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = request;
    authReq = this.AddTokenHeader(
      request,
      this.signinService.currentUserValue.token
    );
    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error.status === 401) {
          // need to implement logout
          this.signinService.logout();
          // refresh token logic
          return this.handleRefreshToken(request, next);
        }
        return throwError(error);
      })
    );
  }

  handleRefreshToken(request: HttpRequest<any>, next: HttpHandler) {
    return this.http
      .post(
        `${environment.apiURL}/auth/refresh`,
        JSON.parse(localStorage.getItem('user') || '')?.refreshToken
      )
      .pipe(
        switchMap((data: any) => {
          localStorage.setItem('user', data);
          return next.handle(this.AddTokenHeader(request, data.token));
        }),
        catchError((err) => {
          this.signinService.logout();
          return throwError(err);
        })
      );
  }

  AddTokenHeader(request: HttpRequest<any>, token: any) {
    return request.clone({
      headers: request.headers.set('Authorization', 'bearer ' + token),
    });
  }
}
