import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'My Journal', url: '/folder/Journal', icon: 'book' },
    { title: 'Bucket List', url: '/folder/Bucket List', icon: 'list' },
    { title: 'Gallery', url: '/folder/Gallery', icon: 'camera' },
    { title: 'Records', url: '/folder/Records', icon: 'mic' },
    {
      title: 'Augmented Reality',
      url: '/folder/Augmented Reality',
      icon: 'scan-circle',
    },
    { title: 'Preferences', url: '/preferences', icon: 'options' },
  ];

  public currentTab: string = 'Inbox';

  constructor() {}

  setCurrentTab(tab: string) {
    console.log(`Tab pressed: ${tab}`);
    this.currentTab = tab;
  }
}
