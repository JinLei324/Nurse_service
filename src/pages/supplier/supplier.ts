import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';

/**
 * Generated class for the SupplierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare let cordova: any;

@IonicPage()
@Component({
  selector: 'page-supplier',
  templateUrl: 'supplier.html',
})
export class SupplierPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public platform: Platform
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplierPage');
  }
  goTocvs(url){
    this.platform.ready().then(() => {
      cordova.InAppBrowser.open(url, "_system", "location=true");
  });
  }
  
}
