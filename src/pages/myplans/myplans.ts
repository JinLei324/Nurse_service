import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the MyplansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myplans',
  templateUrl: 'myplans.html',
})
export class MyplansPage {
  public user_id:any;
 public planList:any=[];
 public plan_length:any;
 public planoff:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userServ:UserServiceProvider,public loadingCtrl:LoadingController) {
      this.planoff = false;
      this.user_id = localStorage.getItem('user_id');
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
    
      loading.present();
      this.userServ.purchasedPlan(this.user_id).subscribe(res=>{
        console.log(res);
        if(res.message=="successfull"){
       this.planoff = true;
         this.planList = res.result;
        this.plan_length = res.result.length;
         console.log(this.planList);
         loading.dismiss();
        }else if(res.message=="unsuccessfull"){
        loading.dismiss();
   
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyplansPage');
  }

}
