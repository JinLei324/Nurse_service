import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import * as $ from 'jquery';
//import { NursingselectPage } from '../nursingselect/nursingselect';

/**
 * Generated class for the PaymentMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare let cordova: any;

@IonicPage()
@Component({
  selector: 'page-payment-method',
  templateUrl: 'payment-method.html',
})
export class PaymentMethodPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentMethodPage');
  }
  termsOf(url){
    this.platform.ready().then(() => {
      cordova.InAppBrowser.open(url, "_system", "location=true");
  });
  }

  privacy(url){
    this.platform.ready().then(() => {
      cordova.InAppBrowser.open(url, "_system", "location=true");
  });
  }
  paymentAlart(){
    $('.alrt_payment').show();
  }
  nursingOpen(){
    this.navCtrl.setRoot('NursingselectPage');
  }
}
