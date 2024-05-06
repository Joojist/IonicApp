import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage implements OnInit {

  private KEY_ITEM = 'item';
  private KEY_DARK_MODE = 'darkModeActivated';

  public item: {
    name: string,
    age: number
  }

  public darkMode: boolean;

  constructor() {
    this.item = {
      name: '',
      age: NaN
    }
    this.darkMode = false;
  }

  ngOnInit(): void {
    this.loadItem();
    this.checkAppMode();
  }

  async loadItem() {
    const item = await Preferences.get({
      key: this.KEY_ITEM
    });

    if (!item.value) {
      this.saveItem();
    } else {
      this.item = JSON.parse(item.value);
    }
  }

  async saveItem() {
    await Preferences.set({
      key: this.KEY_ITEM,
      value: JSON.stringify(this.item)
    });
  }

  async checkAppMode() {
    const checkIsDarkMode = await Preferences.get({key: this.KEY_DARK_MODE});
    this.darkMode = checkIsDarkMode?.value === 'true';
    document.body.classList.toggle('dark', this.darkMode);
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    Preferences.set({key: this.KEY_DARK_MODE, value: this.darkMode.toString()});
  }

  reset() {
    this.item = {
      name: '',
      age: NaN
    }
    this.saveItem();
  }
}