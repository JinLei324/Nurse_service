import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";

/**
 * Generated class for the NursingPersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursing-personal',
  templateUrl: 'nursing-personal.html',
})
export class NursingPersonalPage {
    current: string = "current";
    servicetype:any;
    nursingTitle:any;
    personalTitle:any;
    nurseId:any=1;
    personalId:any=2;
    nurseData:any;
    personalData:any;
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public userServices: UserServiceProvider
    ) {
      this.userServices.servicesType().subscribe(res=>{
      this.servicetype = res.result;
      this.nursingTitle = this.servicetype[0].service_type;
      this.personalTitle = this.servicetype[1].service_type;

      console.log(this.nursingTitle,this.personalTitle);
      })
this.userServices.services(this.nurseId).subscribe(res=>{
this.nurseData = res.result;
console.log(this.nurseData);
})
this.userServices.services(this.personalId).subscribe(res=>{
  this.personalData = res.result;
})
      
console.log(this.nurseId,this.personalId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NursingPersonalPage');
      this.current='current';
  }

}
