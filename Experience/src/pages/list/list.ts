import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  browser: InAppBrowser;
  items: Array<{title: string, note: string, icon: string}>;
  mode : string;
  v = 'none';
  source : string = "";
  dest : string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
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
