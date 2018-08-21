import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  cat:number;
  dist:number;
  traffic:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.cat = navParams.get('cat');
    this.dist = navParams.get('dist');
    this.traffic = navParams.get('traffic');
  }
}
