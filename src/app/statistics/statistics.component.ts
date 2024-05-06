import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'; // Import your data service

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html', // Referencing the HTML template
  styleUrls: ['./statistics.component.scss'], // Referencing the SCSS styles
})
export class StatisticsComponent implements OnInit {
  message: string | undefined; // Variable for fetched message
  userMessage = ''; // User input
  responseMessage: string | undefined; // Response from backend

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getHello().subscribe(
      (response: any) => {
        this.message = response.message; // Store the fetched message
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  sendMessage() {
    if (this.userMessage.trim()) {
      const data = { text: this.userMessage };

      this.dataService.sendData(data).subscribe(
        (response: any) => {
          this.responseMessage = response.message; // Store the backend response
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
    }
  }
}
