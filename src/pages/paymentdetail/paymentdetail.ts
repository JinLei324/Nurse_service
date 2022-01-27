import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery'
//import {NursingselectPage} from "../nursingselect/nursingselect";

/**
 * Generated class for the PaymentdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paymentdetail',
  templateUrl: 'paymentdetail.html',
})
export class PaymentdetailPage {
  public priceName:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.priceName = navParams.get('price_name');
    console.log(this.priceName);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentdetailPage');
  }
    modalss(){
        $(".pop-box").show();
    }
    ok(){
        this.navCtrl.setRoot('NursingselectPage')
    }
}
