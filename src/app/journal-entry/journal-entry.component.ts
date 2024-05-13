import { Component } from '@angular/core';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss'],
})
export class JournalEntryComponent {
  entryTitle: string = '';
  entryContent: string = '';

  constructor() {}

  submitEntry() {
    // Submit journal entry with title, content, and uploaded pictures
    console.log('Title:', this.entryTitle);
    console.log('Content:', this.entryContent);
    // Implement picture upload functionality here
  }
}