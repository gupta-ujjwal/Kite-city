import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  mode : string;
  v = 'none';
  source : string = "";
  dest : string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.mode = "Car";

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
  
  get myStyles(): any {
    return {
        'display' : this.v 
    };
  }

  displayRoutes() {
    if(this.source.length > 0 && this.dest.length>0) 
      this.v = 'block';
  }


  getDetails(event,cat,dist,traffic) {
    this.navCtrl.push(ItemDetailsPage, {
      cat:cat,
      dist:dist,
      traffic:traffic
    });
  }


}
