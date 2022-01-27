
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonicPage, Loading, LoadingController, NavController, NavParams, Events } from 'ionic-angular';
//import { NeedscarePage } from "../needscare/needscare";
import { UserServiceProvider } from "../../providers/user-service/user-service";
//import { SchedulevisitPage } from '../schedulevisit/schedulevisit';
import { Geolocation } from '@ionic-native/geolocation';
//import { NursingdemandmapPage } from '../nursingdemandmap/nursingdemandmap';

declare var google;

/**
 * Generated class for the NursingselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursingselect',
  templateUrl: 'nursingselect.html',
})
export class NursingselectPage {
  @ViewChild('map') mapElement: ElementRef;
  public visit_id: any;
  loading: Loading;
  scheduleList: any;
  public user_id: any;
  public visitName: any;
  public userPic: any;
  public userName: any;
  public lat: any;
  public lon: any;
  map: any;
  public requestData: any = [];



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public userServices: UserServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public events: Events,
    public geolocation: Geolocation) {

    this.user_id = localStorage.getItem('user_id');
    console.log("user id", this.user_id);
    this.userServices.getprofile(this.user_id).subscribe(res => {
      console.log(res);
      if (res.status != 0) {
        this.userPic = res.result.image;
        this.userName = res.result.firstname + " " + res.result.lastname;

        localStorage.setItem('user_mobile',res.result.phone_number);
        localStorage.setItem('user_address',res.result.address);

        this.events.publish('userPic', this.userPic);
        this.events.publish('name', this.userName);
      }

    })
    this.showLoading()
    this.userServices.getvisit_list().subscribe(dataList => {
      this.loading.dismiss()
      this.scheduleList = dataList.result;
    })


  }
  load() {
    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;

      console.log("lat long mere on nursing demand", this.lat, this.lon);
      localStorage.setItem('lati', this.lat);
      localStorage.setItem('loni', this.lon);


      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }


    }, (err) => {
      console.log(err);
    });
  }

  ionViewWillEnter(){
    this.user_id = localStorage.getItem('user_id');
    this.userServices.get_current_request(this.user_id).subscribe(res => {
      console.log(res);
      if(res.message == "successfull"){
        this.navCtrl.setRoot('NursingdemandmapPage', {
          "requestData":res.result.phone_number, "request_id":res.result.id,
          "text":res.result.firstname+' '+res.result.lastname+' is the nurse who will be visiting with you. Thank you.'
        });
      }
    })
  }

  ionViewDidLoad() {
    this.load();

    console.log('ionViewDidLoad NursingselectPage');
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'please select visit time'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'please wait..'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  selectSchedule(visit_id, visit_name) {

    this.requestData['visit_id'] = visit_id;
    this.visitName = visit_name;
    console.log("visite  id", this.requestData, visit_name);

  }

  selectNext() {

    if (this.requestData.visit_id == undefined) {
      this.presentLoadingDefault();
    }
    else if (this.visitName == "Schedule Visit") {
      this.presentLoadingDefault1();
      this.navCtrl.setRoot('SchedulevisitPage', { 'requestdata': this.requestData });
    }
    else {
      this.requestData['visit_date'] = "";
      this.requestData['visit_time'] = "";
      this.navCtrl.setRoot('NeedscarePage', { 'requestData': this.requestData });
    }


  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',

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
}
