import { Component } from '@angular/core';
import { AlertController, IonicPage, Loading, LoadingController, NavController, NavParams, ModalController } from 'ionic-angular';
import * as $ from 'jquery'
import { UserServiceProvider } from "../../providers/user-service/user-service";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';


/**
 * Generated class for the NeedscarePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-needscare',
  templateUrl: 'needscare.html',
})
export class NeedscarePage {

  public authForm: FormGroup;
  loading: Loading;
  valueOrders: any;
  whosCare_list: any;
  public message: any = null;
  private visit_id: any;
  public needMessage: any;
  private servicesRequest: any = [];
  private user_id: any;
  public mobile: any;
  public address: any;
  careId: any = '';
  public visit_time: any;
  public visit_date: any;
  updateMobile: any;
  updateAddress: any;
  gender: any;
  yesNo: any;
  public docProvidedorder: any;
  public authorizeBrhalf: any;
  public userLat: any;
  public userLon: any;
  public locationAvailable:any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public userServices: UserServiceProvider,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public formBuilder: FormBuilder, public modalCtrl: ModalController,
    private nativeGeocoder: NativeGeocoder) {
    this.servicesRequest = navParams.get('requestData');
    this.updateAddress = localStorage.getItem('updateAddress');
    this.user_id = localStorage.getItem('user_id');
    this.mobile = localStorage.getItem('user_mobile');
    this.address = localStorage.getItem('user_address');
    this.locationAvailable = (Number.parseFloat(localStorage.getItem('lat')) != NaN && Number.parseFloat(localStorage.getItem('long')) != NaN );

    console.log("user mobile", this.mobile, "user address", this.address);
    console.log("request care data", this.servicesRequest);

    this.authForm = formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z ]{1,32}')])],
      mail: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{3}?[-. ]?[0-9]{3}?[-. ]?[0-9]{4}'), Validators.minLength(10), Validators.maxLength(10)])],

    })

  }

  ionViewDidLoad() {
    this.userServices.whoCares().subscribe(careList => {
      this.showLoading()
      this.whosCare_list = careList.result
      console.log("who", this.whosCare_list);
      this.loading.dismiss()
    })
    console.log('ionViewDidLoad NeedscarePage');
    $('.readonly_prop.input.input-md').prop('readonly', true);

  }

  selectS(id) {
    console.log(id)
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Plese Select Whos care'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Plese Select blow boxes'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
  presentLoadingDefault2() {
    let loading = this.loadingCtrl.create({
      content: 'Plese fill the details'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  presentLoadingDefault4() {
    let loading = this.loadingCtrl.create({
      content: 'Mobile number update successfully'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
  presentLoadingDefault5() {
    let loading = this.loadingCtrl.create({
      content: 'Updatation failed'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
  presentLoadingDefault6() {
    let loading = this.loadingCtrl.create({
      content: 'Address update successfully'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  homeSlide1(care_id) {


    this.servicesRequest['care_id'] = care_id;
    console.log("care id", this.servicesRequest);
  }

  idtwo() {
    console.log("care id", this.servicesRequest)
    if (this.servicesRequest.care_id == undefined) {
      this.presentLoadingDefault();

    } else {
      $('.id1').hide();
      $('.id2').show();
    }


  }

  ediSave(id, e, k, j) {
    $("#" + e).attr("class", "readonly_prop");
    $("#" + id).hide();
    $("#" + k).show();
    $("#" + j).hide();
    console.log("edit");
  }

  saveEdit(id, e, k, j) {
    $("#" + id).show();
    $("#" + e).hide();
    $("#" + k).removeAttr("class", "readonly_prop");
    $("#" + j).show();
    console.log("save", this.mobile, this.user_id);
    this.userServices.updateData(this.mobile, this.user_id).subscribe(res => {
      if (res.message == "successfull") {

        this.servicesRequest['contactNumber'] = res.result.phone_number;
        console.log("request data", this.servicesRequest)

      } else {
        this.presentLoadingDefault5();
      }

    })

  }

  ediSave1(id, e, k, j) {
    let data: any;
    let profileModal = this.modalCtrl.create('EditlocationPage', data);
    profileModal.present();
    profileModal.onDidDismiss(data => {
      console.log("response of ", data);
      this.address = data;
      this.locationAvailable = true;
      this.servicesRequest['contactAddress'] = this.address;
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };
      this.nativeGeocoder.forwardGeocode(this.address, options)
        .then((coordinates: NativeGeocoderForwardResult[]) => {
          this.userLat = coordinates[0].latitude;
          this.userLon = coordinates[0].longitude;
          localStorage.setItem('lati', this.userLat);
          localStorage.setItem('loni', this.userLon);
          console.log('The coordinates are latitude=' + this.userLat + ' and longitude=' + this.userLon)
        })
        .catch((error: any) => {
          console.log(error);
          this.locationAvailable = false;
        });
    })

    $("#" + e).attr("class", "readonly_prop");
    $("#" + id).hide();
    $("#" + k).show();
    $("#" + j).hide();
    console.log("edit");

  }


  saveEdit1(id, e, k, j) {


    $("#" + id).show();
    $("#" + e).hide();
    $("#" + k).removeAttr("class", "readonly_prop");
    $("#" + j).show();
    console.log("save", this.address);
  }

  homeSlide2() {

    if (this.servicesRequest.gender == undefined || this.servicesRequest.medicalfacility == undefined) {
      this.presentLoadingDefault1();
    }
    else {
      $('.id1').hide();
      $('.id2').hide();
      $('.id3').show();
    }


  }


  males(value) {
    $(".male1").addClass("active");
    $(".male2").removeClass("active");
    this.servicesRequest['gender'] = value;

    console.log(this.servicesRequest);

  }

  female(value) {
    $(".male1").removeClass("active");
    $(".male2").addClass("active");
    this.servicesRequest['gender'] = value;
    console.log(this.servicesRequest);
  }
  yeS1(value) {
    $(".yes1").addClass("active");
    $(".no1").removeClass("active");
    this.servicesRequest['medicalfacility'] = value;
    console.log(this.servicesRequest);
  }

  nO1(value) {
    $(".yes1").removeClass("active");
    $(".no1").addClass("active");
    this.servicesRequest['medicalfacility'] = value;
    console.log(this.servicesRequest);
  }



  yeS(value) {
    $(".yes").addClass("active");
    $(".no").removeClass("active");
    this.servicesRequest['docProvidedorder'] = value;

    console.log(this.servicesRequest);

  }

  nO(value) {
    $(".yes").removeClass("active");
    $(".no").addClass("active");
    this.servicesRequest['docProvidedorder'] = value;
    console.log(this.servicesRequest);
  }




  yes3(value) {
    $(".yes3").addClass("active");
    $(".no3").removeClass("active");
    $(".kl50").removeClass("bg50");
    this.servicesRequest['authorizeBrhalf'] = value;


    $('.text-input').prop('readonly', false);
    $('.com').show();
    console.log(this.servicesRequest);
  }

  no3(value) {
    $(".yes3").removeClass("active");
    $(".no3").addClass("active");
    $(".kl50").addClass("bg50");
    this.servicesRequest['authorizeBrhalf'] = value;
    console.log(this.servicesRequest);
    $('.text-input').prop('readonly', true);
    $('.com').hide();
  }


  homeSlide3(message) {
    this.servicesRequest['needMessage'] = message;
    $('.id1').hide();
    $('.id2').hide();
    $('.id3').hide();
    $('.id4').show();
    /* if (this.servicesRequest.docProvidedorder == "no") {
      this.servicesRequest['needMessage'] = "";
      console.log(this.servicesRequest);
      $('.id1').hide();
      $('.id2').hide();
      $('.id3').hide();
      $('.id4').show();
    }
    else if (this.servicesRequest.docProvidedorder == "yes" && this.servicesRequest.needMessage == undefined) {
      this.presentLoadingDefault2();
    }
    else if (this.servicesRequest.docProvidedorder == "yes" && this.servicesRequest.needMessage != undefined) {
      $('.id1').hide();
      $('.id2').hide();
      $('.id3').hide();
      $('.id4').show();
    }
    else {
      this.presentLoadingDefault2();
    } */

  }
  //this is form fourth function//

  homeSlide4(commentMessage) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(this.address, options)
      .then((coordinates: NativeGeocoderForwardResult[]) => {
        this.userLat = coordinates[0].latitude;
        this.userLon = coordinates[0].longitude;
        localStorage.setItem('lati', this.userLat);
        localStorage.setItem('loni', this.userLon);
        console.log('The coordinates are latitude=' + this.userLat + ' and longitude=' + this.userLon)
      })

    this.servicesRequest['commentMessage'] = commentMessage;
    this.servicesRequest['contactNumber'] = this.mobile;
    this.servicesRequest['contactAddress'] = this.address;
    console.log(this.servicesRequest);
    this.servicesRequest['authorizeBrhalf'] = "yes";

    if (this.servicesRequest.commentMessage == "" || this.servicesRequest.commentMessage == undefined) {
      this.servicesRequest['commentMessage'] = "";
    }
    $('.id1').hide();
    $('.id2').hide();
    $('.id3').hide();
    $('.id4').hide();
    $('.id5').show();


  }
  //this is form five function//

  homeSlide5(value) {
    console.log(this.servicesRequest.authorizeBrhalf);
    if (this.servicesRequest.authorizeBrhalf == "yes") {
      if (this.authForm.valid) {
        this.servicesRequest['person_name'] = value.name;
        this.servicesRequest['person_email'] = value.mail;
        this.servicesRequest['person_mobile'] = value.mobile;
        console.log(this.servicesRequest);
        this.userServices.authorizePerson(this.user_id, this.servicesRequest).subscribe(res => {
          console.log(res);
        })
        this.navCtrl.setRoot('ServicesPage', { 'requestData': this.servicesRequest });
      }
    }
    else {
      this.servicesRequest['person_name'] = "";
      this.servicesRequest['person_email'] = "";
      this.servicesRequest['person_mobile'] = "";


      console.log(this.servicesRequest);
      this.navCtrl.setRoot('ServicesPage', { 'requestData': this.servicesRequest });
    }
  }

}
