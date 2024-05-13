import { Component } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'My Journal', url: '/journal-entry', icon: 'book' },
    { title: 'Bucket List', url: '/bucket-list', icon: 'list' },
    { title: 'Gallery', url: '/gallery', icon: 'camera' },
    { title: 'Records', url: '/folder/Records', icon: 'mic' },
    {
      title: 'Augmented Reality',
      url: '/folder/Augmented Reality',
      icon: 'scan-circle',
    },
    { title: 'Preferences', url: '/preferences', icon: 'options' },
  ];

  public currentTab: string = 'Inbox';
  public darkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.loadDarkMode();
  }

  async loadDarkMode() {
    const checkIsDarkMode = await Preferences.get({ key: 'darkModeActivated' });
    this.darkMode = checkIsDarkMode?.value === 'true';
    document.body.classList.toggle('dark', this.darkMode);
  }

  setCurrentTab(tab: string) {
    console.log(`Tab pressed: ${tab}`);
    this.currentTab = tab;
  }
}
