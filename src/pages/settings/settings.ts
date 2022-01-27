import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {AboutusPage} from "../aboutus/aboutus";
//import {FaqsPage} from "../faqs/faqs";
//import {RatenursingPage} from "../ratenursing/ratenursing";
//import {ContactusPage} from "../contactus/contactus";
//import {CancellationPolicyPage} from "../cancellation-policy/cancellation-policy";
//import {UpdatePasswordPage} from "../update-password/update-password";
//import {MyprofilePage} from "../myprofile/myprofile";
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import { ShareappPage } from '../shareapp/shareapp';
//import { NotificationPage } from '../notification/notification';
//import { ElectronicnotesPage } from '../electronicnotes/electronicnotes';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public userServices: UserServiceProvider,
      private socialSharing: SocialSharing) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

    aboutUs(){
    this.navCtrl.push('AboutusPage');
    }
    faqs(){
    this.navCtrl.push('FaqsPage');
    }
  
    contactUs(){
        this.navCtrl.push('ContactusPage');
    }
    cancelPolicy(){
        this.navCtrl.push('CancellationPolicyPage');
    }
    updatePass(){
        this.navCtrl.push('UpdatePasswordPage');
    }
  myprofile(){
 
    this.navCtrl.push('MyprofilePage');

  }
  shareApp(){
    ///this.navCtrl.push(ShareappPage);
    // this.socialSharing.shareViaEmail('https://play.google.com/store?hl=en', 'Nursingondemand App', ['@gmail.com']).then(() => {
    //   // Succ
    // }).catch(() => {
    //   // Error!
    // });
    this.socialSharing.share("NursingOnDemand", "You can download here App", "", "https://play.google.com/store?hl=en").
then(() => {
alert("Sharing success");
// Success!
}).catch(() => {
// Error!
alert("Share failed");
});
  }

  notification(){
    this.navCtrl.push('NotificationPage');
  }

}
