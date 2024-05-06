import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements AfterViewInit {
  @ViewChild('map') mapElement!: ElementRef;
  map!: google.maps.Map;

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    const mapOptions = {
      center: { lat: 59.437, lng: 24.7536 },
      zoom: 8,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}
