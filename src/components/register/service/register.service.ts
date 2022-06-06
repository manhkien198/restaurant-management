import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegisterPayload } from 'src/models';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private REGISTER_URL: string = `${environment.apiURL}auth/register`;

  constructor(private http: HttpClient) {}
  public register(payload: RegisterPayload): void {
    this.http.post(this.REGISTER_URL, payload);
  }
}
