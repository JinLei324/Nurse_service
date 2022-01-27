import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the LogoutfromnursingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logoutfromnursing',
  templateUrl: 'logoutfromnursing.html',
})
export class LogoutfromnursingPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutfromnursingPage');
  }
  dIsmss(){
    this.viewCtrl.dismiss();
  }
}
