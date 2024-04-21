import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'My Journal', url: '/folder/Journal', icon: 'book' },
    { title: 'Travel Map', url: '/folder/Travel Map', icon: 'map' },
    { title: 'Bucket List', url: '/folder/Bucket List', icon: 'list' },
    {
      title: 'My Travel Statistics',
      url: '/folder/Travel Stats',
      icon: 'stats-chart',
    },
    { title: 'Gallery', url: '/folder/Gallery', icon: 'camera' },
    { title: 'Records', url: '/folder/Records', icon: 'mic' },
  ];

  public currentTab: string = 'Inbox';

  constructor() {}

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }
}
