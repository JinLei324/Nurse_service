import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdditionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addition-details',
  templateUrl: 'addition-details.html',
})
export class AdditionDetailsPage {
  public data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('details');
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionDetailsPage');
  }

}
