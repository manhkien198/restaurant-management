import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PayloadLogin, User } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private LOGIN_URL: string = `${environment.apiURL}auth/login`;
  private currentUserSubject: BehaviorSubject<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '')
    );
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public login(payload: PayloadLogin): void {
    this.http.post(this.LOGIN_URL, payload).pipe(
      map((user: any) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }
  public logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null as any);
  }
}
