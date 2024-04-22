import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'augmentedreality',
  templateUrl: './augmentedreality.page.html',
  styleUrls: ['./augmentedreality.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class augmentedrealityPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  close(){
    this.modalCtrl.dismiss();
  }

}