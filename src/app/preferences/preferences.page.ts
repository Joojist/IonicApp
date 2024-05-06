import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.page.html',
  styleUrls: ['./preferences.page.scss'],
})
export class PreferencesPage {

  private KEY_PRODUCT = 'product';

  public product: {
    name: string,
    quantity: number
  }

  constructor() {
    this.product = {
      name: '1',
      quantity: 0
    }
  }

  async ionViewWillEnter() {

    const product = await Preferences.get({
      key: this.KEY_PRODUCT
    });

    if (!product.value) {
      this.saveProduct();
    } else {
      this.product = JSON.parse(product.value);
    }

  }

  decrement() {
    this.product.quantity--;
    this.saveProduct();
  }

  increment() {
    this.product.quantity++;
    this.saveProduct();
  }

  reset() {
    this.product = {
      name: '1',
      quantity: 0
    }
    this.saveProduct();
  }

  async saveProduct() {
    await Preferences.set({
      key: this.KEY_PRODUCT,
      value: JSON.stringify(this.product)
    });
  }

}