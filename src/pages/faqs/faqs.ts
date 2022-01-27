import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { FaqdetailsPage } from '../faqdetails/faqdetails';
//import { ShareappwithfriendPage } from '../shareappwithfriend/shareappwithfriend';
//import { UnableloginPage } from '../unablelogin/unablelogin';
import { ModalController, ViewController } from 'ionic-angular';
//import { NotreceivingemailPage } from '../notreceivingemail/notreceivingemail';
//import { LogoutfromnursingPage } from '../logoutfromnursing/logoutfromnursing';
//import { UpdateprofilePage } from '../updateprofile/updateprofile';

/**
 * Generated class for the FaqsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs.html',
})
export class FaqsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqsPage');
  }
  fqDetails(){
    
    const modal = this.modalCtrl.create('FaqdetailsPage');
    modal.present();
  }
  shareApp(){
    
    const modal = this.modalCtrl.create('ShareappwithfriendPage');
    modal.present();
  }
  unableLogin(){
    const modal = this.modalCtrl.create('UnableloginPage');
    modal.present();
  }
  notreceiving(){
    const modal = this.modalCtrl.create('NotreceivingemailPage');
    modal.present();
  }

  logoutfrom(){
    const modal = this.modalCtrl.create('LogoutfromnursingPage');
    modal.present();
  }
  updateProfile(){
    console.log("maharajn ki njaik");
    const modal = this.modalCtrl.create('UpdateprofilePage');
    modal.present();
  }

}
