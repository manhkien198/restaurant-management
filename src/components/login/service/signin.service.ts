import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PayloadLogin, User } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private LOGIN_URL: string = `${environment.apiURL}auth/login`;
  private REFRESH_URL: string = `${environment.apiURL}auth/refresh`;
  private currentUserSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user') || (null as any))
    );
    this.user = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public login(payload: PayloadLogin): any {
    return this.http.post(this.LOGIN_URL, payload).pipe(
      map((user: any) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }
  public refreshToken() {
    console.log('running');
    return this.http
      .post<any>(
        `${environment.apiURL}/auth/refresh`,
        this.currentUserValue.refreshToken,
        { withCredentials: true }
      )
      .pipe(
        map((user) => {
          this.currentUserSubject.next(user);
          localStorage.setItem('user', JSON.stringify(user));
          return user;
        })
      );
  }
  public logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.currentUserSubject.next(null as any);
    this.router.navigate(['/login']);
  }
  public refreshToken() {
    return this.http.post(this.REFRESH_URL, this.currentUserValue.token).pipe(
      map((user: any) => {
        this.currentUserSubject.next(user);
        this.startRefreshTokenTimer();
        return user;
      })
    );
  }
  private refreshTokenTimeout: any;
  private startRefreshTokenTimer() {
    const jwtToken = JSON.parse(
      atob(this.currentUserValue.token.split(' ')[1])
    );
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - 60 * 1000;
    this.refreshTokenTimeout = setTimeout(
      () => this.refreshToken().subscribe(),
      timeout
    );
  }
  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
