import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ItemDetailsPage } from '../item-details/item-details';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  tourist = ListPage;
  resident = ItemDetailsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped(event,no) {
    if(no==1)
      this.navCtrl.push(this.tourist, {});
    else
      this.navCtrl.push(this.resident, {});
  }
}