import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserServiceProvider } from "../../providers/user-service/user-service";
//import { LoginPage } from '../login/login';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  authForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userServices: UserServiceProvider, public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])],

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully sent password on your registred mail id '
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Invalid Email id '
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  onSubmit(value) {
    console.log("forgot password sent = : ", value);
    this.userServices.forgotPassword(value.email).subscribe(res => {

      console.log(res);
      if (res.message === "successfull") {
        this.navCtrl.push('LoginPage');
        this.presentLoadingDefault();
      }
      else if (res.message == "unsuccessfull") {
        this.presentLoadingDefault1();
      }


    })

  }

}
