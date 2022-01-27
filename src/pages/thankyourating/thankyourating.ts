import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { NursingselectPage } from '../nursingselect/nursingselect';
//import { RequesthistoryPage } from '../requesthistory/requesthistory';

/**
 * Generated class for the ThankyouratingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thankyourating',
  templateUrl: 'thankyourating.html',
})
export class ThankyouratingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankyouratingPage');
  }
  close(){
    this.navCtrl.push('RequesthistoryPage')
  }
}
