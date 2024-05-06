
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // HTTP client for requests
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This service is available application-wide
})
export class DataService {
  private baseUrl = 'http://localhost:3000/api'; // Base URL for the Express backend

  constructor(private http: HttpClient) {}

  // Fetch a message from the backend
  getHello(): Observable<any> {
    return this.http.get(`${this.baseUrl}/hello`); // Get the message
  }

  // Send a message to the backend
  sendData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/send-message`, data); // Post data to backend
  }
}
