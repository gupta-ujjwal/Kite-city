import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  search = ListPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped(event) {
    this.navCtrl.push(this.search, {
    });
  }
}