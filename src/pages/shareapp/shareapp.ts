import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { SettingsPage } from '../settings/settings';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the ShareappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shareapp',
  templateUrl: 'shareapp.html',
})
export class ShareappPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareappPage');
  }

  close(){
     this.viewCtrl.dismiss();
    
  }
}
