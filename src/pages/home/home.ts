import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MassKarta } from '../masskarta/masskarta';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goToMassKarta() {
    this.navCtrl.push(MassKarta);
  }

  goToAboutPage() {
    this.navCtrl.push(AboutPage);
  }
}
