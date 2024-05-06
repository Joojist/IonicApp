import { Component, OnInit } from '@angular/core';
import './google-map.component.scss';

@Component({
  selector: 'app-google-map',
  template: `
    <google-map
      height="400px"
      width="100%"
      [center]="center"
      [zoom]="zoom"
    ></google-map>
  `,
  styleUrls: [],
})
export class GoogleMapComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 40.73061, lng: -73.935242 };
  zoom: number = 12;

  ngOnInit() {
    console.log('GoogleMapComponent initialized.');
  }
}
