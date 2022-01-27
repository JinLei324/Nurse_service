import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, AlertController, LoadingController } from 'ionic-angular';
//import {TermsusePage} from "../termsuse/termsuse";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {Geolocation} from "@ionic-native/geolocation";
import * as $ from 'jquery'
//import { TermsconditionPage } from '../termscondition/termscondition';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { FCM } from '@ionic-native/fcm';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  authForm: FormGroup;
  public formValue:any=[];
  user_id:any;
  user_mobile:any;
  public terms:any;
  public udid:any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public userServices: UserServiceProvider,
    private alertCtrl: AlertController,
    public geolocation: Geolocation,
    private loadingCtrl: LoadingController,
    private uniqueDeviceID: UniqueDeviceID,
    public  fcm: FCM
   ) {
  

    // this.uniqueDeviceID.get()
    // .then((uuid: any)=>{
    //  this.udid = uuid;
    // console.log("udid",this.udid)
    
    // })
 
    this.getLocation();
    
    this.authForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{1,32}')])],
      lastName: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{1,32}')])],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{1,15}'),Validators.minLength(10),Validators.required,Validators.maxLength(10)])],
      dob: ['', Validators.compose([Validators.required])],
      repassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
    
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((position) => {
      let lat:any = position.coords.latitude;
      let long:any = position.coords.longitude;
      localStorage.setItem('lat', lat)
      localStorage.setItem('long', long)

      console.log("lattitute",position.coords.latitude)
      console.log("lattitute",position.coords.longitude)

    }).catch((error)=>{
      //this.getLocation();
    });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please fill all fields'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Password does not match'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'Please Accept Terms And Conditions'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault3() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully registred user'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault4() {
    let loading = this.loadingCtrl.create({
      content: 'Registration failed'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  ionViewDidLoad() {
    this.fcm.getToken().then(token=>{
      console.log("device token",token);
      this.udid = token;
  })
    console.log('ionViewDidLoad SignupPage');
  }
    

  onSubmit(value: any): void {
      let lat = localStorage.getItem('lat');
      let long = localStorage.getItem('long');
     
      if(value.dob=="" || value.phone==""){
        this.presentLoadingDefault();
      }else{
        this.formValue['dob'] = value.dob;
        this.formValue['phone'] = value.phone;
        if(this.terms==true){
          console.log(this.formValue);
          this.userServices.register(this.formValue,lat,long,this.udid).subscribe(res => {
            console.log(res);
             this.user_id = res.result.id;
             this.user_mobile = res.result.phone_number;
             localStorage.setItem('user_id',this.user_id);
             localStorage.setItem('user_mobile',this.user_mobile);
             if (res.message == 'successfull') {
               this.presentLoadingDefault3();
              this.navCtrl.push('TermsusePage');
             } else if (res.message == 'unsuccessfull') {
                 this.presentLoadingDefault4();
             }
           })
        }else{
          this.presentLoadingDefault2();
        }
        
      } 

  }



  firstsign(value){
    if(value.firstName=="" || value.lastName=="" || value.email=="" || value.password=="" || value.repassword==""){
      this.presentLoadingDefault();
    }else {
      if(value.password==value.repassword){
        this.formValue['firstName'] = value.firstName;
        this.formValue['lastName'] = value.lastName;
        this.formValue['email'] = value.email;
        this.formValue['password'] = value.password;
        console.log(this.formValue);

        $(".bg-2").css("right","0");
        $(".btn-designss").show();
      }else{
        this.presentLoadingDefault1();
      }
     
    }
   
  }

  backg(){
    $(".bg-2").css("right","-359px");
    $(".btn-designss").hide();
  }

  term(){
    this.navCtrl.push('TermsconditionPage')
  }
}
