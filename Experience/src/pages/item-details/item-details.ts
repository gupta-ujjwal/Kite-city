import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  cat:number;
  dist:number;
  traffic:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private iab: InAppBrowser) {
    // If we navigated to this page, we will have an item available as a nav param
    this.cat = navParams.get('cat');
    this.dist = navParams.get('dist');
    this.traffic = navParams.get('traffic');
  }
  
  getDetails(url) {
    if(url==1) {
      const browser = this.iab.create("https://kitecity.tech/vr/view/?image=../g/3.jpg",'_system');
      browser.show()
    }
    if(url==2) {
      const browser = this.iab.create("https://kitecity.tech/vr/view/?image=../g/three.jpg",'_system');
      browser.show()
    }
    if(url==3) {
      const browser = this.iab.create("https://kitecity.tech/vr/view/?image=../g/one.jpg",'_system');
      browser.show()
    }
  };
}
