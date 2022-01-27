import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
//import {ScheduledrequestsPage} from "../scheduledrequests/scheduledrequests";
//import {AdditionDetailsPage} from "../addition-details/addition-details";
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import { MdpickuplocationPage } from '../mdpickuplocation/mdpickuplocation';
import * as $ from 'jquery';
//import { CompleteRequestPage } from '../complete-request/complete-request';

//import { ThankyouratingPage } from '../thankyourating/thankyourating';
/**
 * Generated class for the RequesthistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requesthistory',
  templateUrl: 'requesthistory.html',
})
export class RequesthistoryPage {
    current: string = "current";
    public user_id:any;
    public currentData:any=[];
    public scheduleData:any=[];
    public completeData:any=[];
    public currentdataLength:any;
    public scheduledataL:any;
    public completeDatal:any;
    public datatrue:boolean=false;
    public datatrue1:boolean=false;
    public datatrue2:boolean=false;
    public scheduleDetails:any=[];
    public scheduleAddion:any=[];



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userServices: UserServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,) {
                this.user_id = localStorage.getItem('user_id')
            this.loadData();
                 
  }

  loadData(){
    this.userServices.getRequestHistory(this.user_id).subscribe(res=>{
      console.log(res);
      this.currentData = res.result.request.Current;
      this.scheduleData = res.result.request.Scheduled;
      this.completeData = res.result.request.Completed;

      this.scheduledataL =   this.scheduleData.length;
     this.currentdataLength = this.currentData.length;
     this.completeDatal = this.completeData.length;
      console.log("length of scff data",this.completeDatal);

      if(this.currentdataLength==1){
        this.datatrue=true;
    }
  
if(this.scheduledataL == 1 || this.scheduledataL >=1 ){
    this.datatrue1 = true;
}

if(this.completeDatal == 1 || this.completeDatal >=1 ){
    this.datatrue2 = true;
}


 
  })
  }


  ionViewDidLoad() {
 



    console.log('ionViewDidLoad RequesthistoryPage');
      this.current='current';
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully cancel this request'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }


    presentAlert(){
      $(".close-rew").show();
    }
    hidepooss1(){
        $(".close-rew").hide();
    }
    hidepooss(){
        $(".pop-box-rating").show();
        $(".close-rew").hide();
    }
    close_done(){
        this.navCtrl.push(RequesthistoryPage)
    }
    viewDetails(serviceName,nurse_id,nurse_type,visit_charge,service){
        this.scheduleDetails['serviceType'] = serviceName;
        this.scheduleDetails['nurse_id'] = nurse_id;
        this.scheduleDetails['nurseType'] = nurse_type;
        this.scheduleDetails['visitCharge'] = visit_charge;
        this.scheduleDetails['services'] = service;
        this.scheduleDetails['page_name'] = 'Scheduled';

        console.log(this.scheduleDetails);
      this.navCtrl.push('ScheduledrequestsPage',{'scheduleData':this.scheduleDetails});
    }

    aditionDetails(visit_type,gender,address,number,doctor_order,medical_fac,needs){
        this.scheduleAddion['visitType'] = visit_type;
        this.scheduleAddion['gender'] = gender;
        this.scheduleAddion['address'] = address;
        this.scheduleAddion['number'] = number;
        this.scheduleAddion['doc_order'] = doctor_order;
        this.scheduleAddion['madical'] = medical_fac;
        this.scheduleAddion['needs'] = needs;
      console.log(this.scheduleAddion);



        this.navCtrl.push('AdditionDetailsPage',{'details':this.scheduleAddion});
    }

    popup(){
        $('.close-rew2').show();
    }

    cancel(){
        $('.close-rew2').hide();
    }
    ok(id){
console.log(id);

this.userServices.cancelRequest(id).subscribe(res=>{
    console.log(res);
    if(res.result=="successfull"){
        $('.close-rew2').hide();
        this.loadData();
    }
   
})


        //this.navCtrl.push(RequesthistoryPage);
    }
    completeView(serviceName,nurse_id,nurse_type,visit_charge,service){
        this.scheduleDetails['serviceType'] = serviceName;
        this.scheduleDetails['nurse_id'] = nurse_id;
        this.scheduleDetails['nurseType'] = nurse_type;
        this.scheduleDetails['visitCharge'] = visit_charge;
        this.scheduleDetails['services'] = service;
        this.scheduleDetails['page_name'] = 'Completed';

        console.log(this.scheduleDetails);
      this.navCtrl.setRoot('ScheduledrequestsPage',{'scheduleData':this.scheduleDetails});
        
    }
    removePop(){
        $('.close-rew1').show();
    }
    removeok(){
        this.navCtrl.push('RequesthistoryPage');
    }
    remove(){
        this.navCtrl.push('RequesthistoryPage');
    }
    go_done(){
        this.navCtrl.setRoot('ThankyouratingPage')
    }
    cancil(requesid){
        console.log(requesid);
        this.userServices.cancelRequest(requesid).subscribe(res=>{
            console.log(res);
            if(res.message=="Request Cancel successful")
            this.presentLoadingDefault();
        })
    }
    viewRequest(){
        alert("hello");
    }

 
}
