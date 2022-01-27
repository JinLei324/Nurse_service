import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the ScheduledrequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheduledrequests',
  templateUrl: 'scheduledrequests.html',
})
export class ScheduledrequestsPage {
 public scheduleData:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userService:UserServiceProvider) {
      this.scheduleData = navParams.get('scheduleData');
      console.log(this.scheduleData);
   
  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduledrequestsPage');
  }

}
