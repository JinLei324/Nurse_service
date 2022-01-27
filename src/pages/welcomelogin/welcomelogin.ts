import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {SignupPage} from "../signup/signup";
//import {LoginPage} from "../login/login";

/**
 * Generated class for the WelcomeloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcomelogin',
  templateUrl: 'welcomelogin.html',
})
export class WelcomeloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomeloginPage');
  }

    signUp(){
      this.navCtrl.push('SignupPage');
    }
    SignIn(){
        this.navCtrl.push('LoginPage');
    }

}
