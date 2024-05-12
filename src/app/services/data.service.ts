import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HTTP client for requests
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This service is available application-wide
})
export class DataService {
  private baseUrl = 'https://pure-caverns-89402-efac6b3f3689.herokuapp.com'; // Base URL for the Express backend

  constructor(private http: HttpClient) {}

  // Fetch a message from the backend
  getHello(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/hello`); // Get the message
  }

  // Send a message to the backend
  sendData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/send-message`, data); // Post data to backend
  }
}
