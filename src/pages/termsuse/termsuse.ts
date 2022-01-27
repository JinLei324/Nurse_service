import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,LoadingController } from 'ionic-angular';
//import { TermsconditionPage } from '../termscondition/termscondition';
//import {NursingselectPage} from "../nursingselect/nursingselect";
//import {PrivacypolicyPage} from "../privacypolicy/privacypolicy";

/**
 * Generated class for the TermsusePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


declare let cordova: any;

@IonicPage()
@Component({
  selector: 'page-termsuse',
  templateUrl: 'termsuse.html',
})
export class TermsusePage {

  public check:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public platform:Platform,public loadingCtrl: LoadingController) {
    
  }
    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            content: 'Please Accept Terms and Condition'
        });

        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 2000);
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsusePage');
  }
    nursingSlide(){
    if(this.check==false || this.check==null){
      this.presentLoadingDefault();
    }
    else{
        this.navCtrl.setRoot('NursingselectPage');
    }

    }
   
    launch() {
     this.navCtrl.push('TermsconditionPage');
  }
  privacy(){
    this.navCtrl.push('PrivacypolicyPage');
  }
    notify(value){
    console.log(value);
    this.check = value;

    }
}
