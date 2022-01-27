import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import { FamilyprofilePage } from '../familyprofile/familyprofile';
//import { EditmemberProfilePage } from '../editmember-profile/editmember-profile';

/**
 * Generated class for the ViewfamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewfamily',
  templateUrl: 'viewfamily.html',
})
export class ViewfamilyPage {
  public user_id:any;
  public familydata:any;
  public image='assets/imgs/user.png';

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public userServices: UserServiceProvider
    ) {
    this.user_id = localStorage.getItem('user_id');
    console.log(this.user_id);
    this.userServices.getfamilyMember(this.user_id).subscribe(res=>{
      this.familydata = res.result;
      console.log(this.familydata);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewfamilyPage');
  }
  viewFamily(memberId){

    console.log(memberId);
    this.navCtrl.setRoot('EditmemberProfilePage',{'member_id':memberId});

  }

}
