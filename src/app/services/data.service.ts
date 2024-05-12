
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class DataService {
  private baseUrl = 'https://pure-caverns-89402-efac6b3f3689.herokuapp.com'; 

  constructor(private http: HttpClient) {}

  getHello(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/hello`);
  }

  sendData(data: any): Observable<any> {

    return this.http.post(`${this.baseUrl}/api/send-message`, data);
  }
}
