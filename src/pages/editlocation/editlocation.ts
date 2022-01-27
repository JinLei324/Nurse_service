import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
//import { NeedscarePage } from '../needscare/needscare';
import { UserServiceProvider } from "../../providers/user-service/user-service";

/**
 * Generated class for the EditlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editlocation',
  templateUrl: 'editlocation.html',
})
export class EditlocationPage {
  public U_data: any

  public user_id: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController, private nativeGeocoder: NativeGeocoder,
    public nurseServ: UserServiceProvider, public loadingCtrl: LoadingController) {
    this.U_data = navParams.get('data');
    this.user_id = localStorage.getItem('user_id')
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditlocationPage');
  }
  detail(e) {
    console.log("full location", e.description);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.forwardGeocode(e.description, options)
  .then((result) => {
    console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude)

    this.nurseServ.updateAddress(this.user_id, e.description, result[0].latitude, result[0].longitude).subscribe(res => {
      console.log(res);
      if (res.message = "successfull") {
        this.U_data = res.result.address

        this.viewCtrl.dismiss(this.U_data);

      }
      else {

      }


    })

  })
  .catch((error: any) => console.log(error));

    



  }
  dIsmss() {
    this.viewCtrl.dismiss();
  }
}
