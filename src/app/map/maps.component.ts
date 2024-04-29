import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements AfterViewInit {
  @ViewChild('map') mapElement!: ElementRef; // Reference to the map container
  map!: google.maps.Map; // Google Map instance

  ngAfterViewInit() {
    this.loadMap(); // Initialize the map after the view is ready
  }

  loadMap() {
    const mapOptions = {
      center: { lat: 59.4370, lng: 24.7536 }, // Initial coordinates
      zoom: 8, // Initial zoom level
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions); // Create the map
  }
}
