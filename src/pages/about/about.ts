import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'about.html'
})
export class AboutPage {
  private info:string = "about";
  constructor(public navCtrl: NavController) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
