import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private apiURL = environment.apiURL;
  constructor(private http: HttpClient) {}
  public getFood(page: number, size: number): Observable<Response> {
    const url = `${this.apiURL}food?page=${page}&size=${size}`;
    return this.http.get<any>(url);
  }
}
