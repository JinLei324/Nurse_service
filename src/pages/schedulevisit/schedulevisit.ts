import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController} from 'ionic-angular';
//import { NeedscarePage } from '../needscare/needscare';

/**
 * Generated class for the SchedulevisitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedulevisit',
  templateUrl: 'schedulevisit.html',
})
export class SchedulevisitPage {
  public dt:any;
  public tim:any;
  public requestData:any=[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public loadingCtrl: LoadingController) {
       this.dt = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString();
        this.requestData = navParams.get('requestdata');
        console.log("request data",this.requestData)

  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please select date and time'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulevisitPage');
  }
  Nextcare(dt,tim){
    console.log(dt,tim);

  this.requestData['visit_date'] = dt;
  this.requestData['visit_time'] = tim;

    if(this.requestData.visit_date == undefined || this.requestData.visit_time == undefined){
      this.presentLoadingDefault();
    }
    else{
      console.log(this.requestData);
      this.navCtrl.setRoot('NeedscarePage',{'requestData':this.requestData});
    }

    
  }

  getTomorrowDate(){
    let today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    return today.getFullYear()+"-"+(today.getMonth() <= 9 ? ("0"+today.getMonth()) : today.getMonth())+"-"+(today.getDate() <= 9 ? ("0"+today.getDate()) : today.getDate());
  }


}
