import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";

/**
 * Generated class for the NursingcareservicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursingcareservices',
  templateUrl: 'nursingcareservices.html',
})
export class NursingcareservicesPage {
  service_id:any;
  serveiceData:any;
  serviceTitle:any;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public userServices: UserServiceProvider
    ) {
    this.service_id = navParams.get('service_id');
    console.log("service id",this.service_id);
    this.serviceTitle = navParams.get('servicetype');
    console.log(this.serviceTitle);
    this.userServices.services(this.service_id).subscribe(res=>{
     this.serveiceData = res.result;
    
     console.log(this.serveiceData);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NursingcareservicesPage');
  }

}
