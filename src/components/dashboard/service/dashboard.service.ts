import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}
  public getDashboardData(): Observable<Response> {
    const url = `${this.apiURL}dashboard`;
    return this.http.get<any>(url);
  }
}
