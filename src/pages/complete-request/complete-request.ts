import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import { Slides } from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import {RequesthistoryPage} from "../requesthistory/requesthistory";
import { Geolocation } from '@ionic-native/geolocation';
//import { PaymentPage } from '../payment/payment';
//import {SupplierPage} from "../supplier/supplier";
import * as $ from 'jquery'
//import { NursingdemandmapPage } from '../nursingdemandmap/nursingdemandmap';
declare var google


/**
 * Generated class for the CompleteRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete-request',
  templateUrl: 'complete-request.html',
})
export class CompleteRequestPage  {
  @ViewChild('slides') slides: Slides;
  @ViewChild('map') mapContainer: ElementRef;
  loading: Loading;
  public serviceDetails:any; 
  public nurseId:any;
  public nurseType:any;
  public serviceType:any;
  public services:any;
  public nurseMobile:any;
  public requestId:any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public geolocation: Geolocation,
              public userServices: UserServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,) {
                this.serviceDetails = navParams.get('requestDetails');
                console.log(this.serviceDetails);
                this.nurseId = this.serviceDetails.nurse_id;
                this.nurseType = this.serviceDetails.nurse_type;
                this.serviceType = this.serviceDetails.service_type;
                this.services = this.serviceDetails.services; 
                this.nurseMobile = this.serviceDetails.nurseMobile;
                this.requestId = this.serviceDetails.requestId;

                console.log("request ki id ",this.requestId);

 

  }



  ionViewDidLoad() {

  



    console.log('ionViewDidLoad CompleteRequestPage');
  }

  ok_payment(){
    this.navCtrl.setRoot('NursingdemandmapPage',{'requestData':this.nurseMobile,'request_id':this.requestId});
  }


  question(){
    $(".question-popup").show();
  }
  close(){
    $(".question-popup").hide();
  }
}
