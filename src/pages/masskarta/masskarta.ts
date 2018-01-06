import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
   selector: "masskarta",
  templateUrl: 'masskarta.html'
})
export class MassKarta {
  constructor(public navCtrl: NavController) {}

    goBack() {
      this.navCtrl.pop();
    }
}
