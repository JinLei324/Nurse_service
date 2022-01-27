import { Component } from '@angular/core';
import { IonicPage, Loading, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
//import { TermsusePage} from "../termsuse/termsuse";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserServiceProvider } from "../../providers/user-service/user-service";
//import { ForgotPasswordPage} from "../forgot-password/forgot-password";
import * as $ from 'jquery'
//import { NursingselectPage} from "../nursingselect/nursingselect";
//import { SignupPage } from '../signup/signup';
import { CallNumber } from '@ionic-native/call-number';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Geolocation } from "@ionic-native/geolocation";
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { FCM } from '@ionic-native/fcm';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation..
 * 3
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  isLoggedIn: boolean = false;
  users: any;
  authForm: FormGroup;
  loading: Loading;
  FB_APP_ID: any = 2276720275901192;
  fbEmail: string
  fbUserId: string
  fbUserName: any
  fbImg: any;
  public lat: any;
  public long: any;
  public loading1: any;
  public firstname: any;
  public lastname: any;
  public udid: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public userServices: UserServiceProvider,
    public events: Events,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public geolocation: Geolocation,
    public fb: Facebook,
    private uniqueDeviceID: UniqueDeviceID,
    public fcm: FCM
  ) {


    this.geolocation.getCurrentPosition().then((position) => {
      //   this.uniqueDeviceID.get()
      // .then((uuid: any)=>{
      //  this.udid = uuid;
      // console.log("udid",this.udid)

      // })

      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
      localStorage.setItem('lat', this.lat)
      localStorage.setItem('long', this.long);

      console.log("lattitute", position.coords.latitude);
      console.log("lattitute", position.coords.longitude);

    });


    fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if (res.status === "connect") {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));

    this.authForm = formBuilder.group({

      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])],

    });


  }




  ionViewDidLoad() {
    this.fcm.getToken().then(token => {
      console.log("device token", token);
      this.udid = token;
    })
    this.loading1 = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    console.log('ionViewDidLoad LoginPage');
  }

  forgotPass() {
    this.navCtrl.push('ForgotPasswordPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      //dismissOnPageChange: true
    });
    this.loading.present();
  }


  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({

      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }



  onSubmit(value: any): void {

    console.log(value);
    if (this.authForm.valid) {
      this.showLoading()

      this.userServices.login(value, this.lat, this.long, this.udid).subscribe(datas => {
        console.log(datas);
        if (datas.message === 'successfull') {
          localStorage.setItem('user_mobile', datas.result.phone_number);
          localStorage.setItem('user_address', datas.result.address);
          this.events.publish('user_id', datas.result.id)
          localStorage.setItem('user_id', datas.result.id);
          this.loading.dismiss();
          this.navCtrl.setRoot('NursingselectPage');
        } else if (datas.result) {
          this.showError(datas.result);
        }
      })
    }
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  facebookLogin() {




    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        if (res.status === "connected") {
          this.loading1.present();
          //alert('hello2')
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
          //alert('hello3')
          console.log(res.authResponse)
          //console.log("data fb",this.fbUserId,this.fbEmail,this.fbUserName)

        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));

  }

  getUserDetail(userid) {
    //alert(userid +'hello4');
    this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
        console.log('userData', this.users)
        this.fbEmail = this.users.email;
        this.fbUserId = userid;
        this.fbImg = encodeURIComponent(this.users.picture.data.url);
        //let img = this.fbImg
        //localStorage.setItem('img',this.fbImg);
        this.fbUserName = this.users.name;
        this.fbUserName = this.fbUserName.split(" ");
        this.firstname = this.fbUserName[0];
        this.lastname = this.fbUserName[1];

        console.log(this.fbUserId, this.fbEmail, this.fbImg, this.fbUserName);


        let lat = localStorage.getItem('lat');
        let long = localStorage.getItem('long');

        //this.showLoading()

        this.userServices.fbLogin(this.firstname, this.lastname, this.fbEmail, this.fbUserId, this.fbImg, lat, long).subscribe(userFbData => {
          console.log(userFbData)
          if (userFbData.message === 'successfull') {
            this.loading1.dismiss();

            localStorage.setItem('user_mobile', userFbData.result.phone_number);
            localStorage.setItem('user_address', userFbData.result.address);
            localStorage.setItem('user_id', userFbData.result.id);
            this.events.publish('user_id', userFbData.result.id)
            this.events.publish('name', userFbData.result.firstname + " " + userFbData.result.lastname)
            this.events.publish('userPic', userFbData.result.image)

            this.navCtrl.setRoot('NursingselectPage');
          } else if (userFbData.result) {
            this.showError(userFbData.result);
          }

          //this.showError('Facebook Login Successfully');


        });
      })
      .catch(e => {
        console.log(e);
      });
  }
}
