import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import { LoginPage } from '../login/login';

/**
 * Generated class for the UpdatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-password',
  templateUrl: 'update-password.html',
})
export class UpdatePasswordPage {
  public authForm: FormGroup;
  public oldpwd:any;
  public newpwd:any;
  public cnfpwd:any;
  public user_id:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
     public userServices: UserServiceProvider,
     public loadingCtrl: LoadingController,public alertCtrl:AlertController) {
      this.authForm = formBuilder.group({
        oldpwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        newpwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        cnfpwd: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });
    this.user_id = localStorage.getItem('user_id');
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePasswordPage');
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please fill All fields..'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Password does not match..'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      
      subTitle: 'Password successfully update',
      buttons: ['ok']
    });
    alert.present();
  }
  presentAlert1() {
    let alert = this.alertCtrl.create({
      
      subTitle: 'Updation Failed',
      buttons: ['ok']
    });
    alert.present();
  }

onSubmit(value:any) :void{

if(this.authForm.valid){
console.log(value);
   if(value.newpwd == value.cnfpwd){
      this.userServices.updatePassword(this.user_id,value).subscribe(res=>{
        console.log(res);
        if(res.result=="successfull"){
          this.navCtrl.setRoot('LoginPage');
         this.presentAlert();
         
        }
        else{
         this.presentAlert1();
        }
      })
   }else{
    this.presentLoadingDefault1();
   }
}else{
this.presentLoadingDefault();
}
}
}