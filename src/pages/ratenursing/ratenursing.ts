import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import {ServicesPage} from "../services/services";


/**
 * Generated class for the RatenursingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ratenursing',
  templateUrl: 'ratenursing.html',
})
export class RatenursingPage {

  loading: Loading;

  rates:any={}


  constructor (public navCtrl: NavController,
               public navParams: NavParams,
               public userServices: UserServiceProvider,
               private alertCtrl: AlertController,
               private loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatenursingPage');
  }

  getRatting(rate){
      let user_id = localStorage.getItem('user_id')
    this.showLoading()
    this.userServices.getRating(user_id,rate).subscribe(data=>{


      if(data.message === "successfull"){

          let text = "Rating successfull Submited";
          this.showError(text)
      }else {

        let text = "Unccessfull";
        this.showError(text)
      }
      //this.navCtrl.setRoot(ServicesPage)

    });


    console.log(rate);

  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }


  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
