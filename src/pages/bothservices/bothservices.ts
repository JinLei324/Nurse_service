import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { NursingcareservicesPage } from '../nursingcareservices/nursingcareservices';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import $ from "jquery";
/**
 * Generated class for the BothservicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bothservices',
  templateUrl: 'bothservices.html',
})
export class BothservicesPage {
  serviceType:any;
  nursingservice:any;
  personalService:any;
  nursingid:any;
  personal_id:any;
 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userServices: UserServiceProvider) {
      this.userServices.servicesType().subscribe(res=>{
        this.serviceType = res.result.slice(0,1);
        console.log("service name list",this.serviceType);
      
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BothservicesPage');
  }
 

  viewNursing(service_id,serviceType){

  console.log(service_id);
  this.navCtrl.push('NursingcareservicesPage',{'service_id':service_id,'servicetype':serviceType});
  }

}
