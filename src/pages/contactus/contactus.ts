import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import {TermsusePage} from "../termsuse/termsuse";
//import {ServicesPage} from "../services/services";

/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  authForm: FormGroup;
  loading: Loading;
  public user_id:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public userServices: UserServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,) {
                this.user_id = localStorage.getItem('user_id');
                console.log(this.user_id);

    this.authForm = formBuilder.group({

      name: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z ]{1,32}')])],
       message: ['', Validators.compose([Validators.required])],
       email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'plesae fill all value'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully send message'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'Message failed'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }


  onSubmit(value: any): void {
    console.log(value);
  if(value.name==""||value.message==""||value.email==""||value.name==undefined||value.message==undefined||value.email==undefined){
    this.presentLoadingDefault();
  }
  else{
   this.userServices.contactUs(value,this.user_id).subscribe(res=>{
     if(res.message=="successfull"){
       this.presentLoadingDefault1();
     }
     else{
     this.presentLoadingDefault2();
     }
   })
  }

  }

}
