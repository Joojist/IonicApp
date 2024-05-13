import { Component } from '@angular/core';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss'],
})
export class BucketListComponent {
  bucketListItems: { name: string; checked: boolean }[] = [];
  newItem: string = '';

  constructor() {
    const storedItems = localStorage.getItem('bucketList');
    if (storedItems) {
      this.bucketListItems = JSON.parse(storedItems);
    }
  }

  updateBucketList() {
    localStorage.setItem('bucketList', JSON.stringify(this.bucketListItems));
  }

  addItem() {
    if (this.newItem.trim() !== '') {
      this.bucketListItems.push({ name: this.newItem, checked: false });
      this.newItem = '';
      this.updateBucketList();
    }
  }

  deleteItem(index: number) {
    this.bucketListItems.splice(index, 1);
    this.updateBucketList();
  }
}