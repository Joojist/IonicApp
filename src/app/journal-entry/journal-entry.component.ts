// journal-entry.component.ts
import { Component } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss'],
})
export class JournalEntryComponent {
  journalEntries: { title: string, content: string, pictures: { url: string, uploaded: boolean }[], expanded: boolean, selected: boolean }[] = [];
  newEntryTitle: string = '';
  newEntryContent: string = '';
  newEntryPictures: { url: string, uploaded: boolean }[] = [];
  showNewEntryForm: boolean = false;
  deleteMode: boolean = false;

  constructor() {
    // Load journal entries from local storage
    const storedEntries = localStorage.getItem('journalEntries');
    if (storedEntries) {
      this.journalEntries = JSON.parse(storedEntries);
    }
  }

  saveEntries() {
    // Save journal entries to local storage
    localStorage.setItem('journalEntries', JSON.stringify(this.journalEntries));
  }

  toggleNewEntryForm() {
    // Toggle the visibility of the new entry form
    this.showNewEntryForm = !this.showNewEntryForm;
  }

  async addPicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
    });

    // Add the selected picture to the new entry pictures array
    if (image && image.dataUrl) {
      this.newEntryPictures.push({ url: image.dataUrl, uploaded: false });
    }
  }

  submitEntry() {
    // Submit new journal entry
    const newEntry = {
      title: this.newEntryTitle,
      content: this.newEntryContent,
      pictures: this.newEntryPictures,
      expanded: false,
      selected: false  // Add selected property for multi-select delete
    };
    this.journalEntries.push(newEntry);
    this.saveEntries();

    // Reset new entry fields
    this.newEntryTitle = '';
    this.newEntryContent = '';
    this.newEntryPictures = [];

    // Hide the new entry form
    this.showNewEntryForm = false;
  }

  toggleContent(entry: { title: string, content: string, pictures: { url: string, uploaded: boolean }[], expanded: boolean }) {
    if (!this.deleteMode) {
      console.log('Before toggle:', entry.expanded);
      entry.expanded = !entry.expanded;
      console.log('After toggle:', entry.expanded);
      this.saveEntries();
    }
}
  
  toggleDeleteMode() {
    this.deleteMode = !this.deleteMode;
    // Reset all entry selections when exiting delete mode
    if (!this.deleteMode) {
      this.journalEntries.forEach(entry => entry.selected = false);
    }
  }
  
  deleteEntry(entry: any) {
    const index = this.journalEntries.indexOf(entry);
    if (index !== -1) {
      this.journalEntries.splice(index, 1);
      this.saveEntries();
    }
  }
  
  deleteSelectedEntries() {
    // Filter out selected entries and remove them from the array
    this.journalEntries = this.journalEntries.filter(entry => !entry.selected);
    this.saveEntries();
  }
  
}