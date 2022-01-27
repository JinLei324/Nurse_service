import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { UserServiceProvider } from "../../providers/user-service/user-service";
//import {RequesthistoryPage} from "../requesthistory/requesthistory";

import { Geolocation } from '@ionic-native/geolocation';
//import {PaymentPage} from "../payment/payment";

//import { CompleteRequestPage } from '../complete-request/complete-request';
//import {ChattingPage} from "../chatting/chatting";
import * as $ from 'jquery';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
declare var google;

/**
 * Generated class for the CompletePersonalCarePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complete-personal-care',
  templateUrl: 'complete-personal-care.html',
})
export class CompletePersonalCarePage {


  @ViewChild(Slides) slides: Slides;
  @ViewChild('map') mapElement: ElementRef;
  loading: Loading;
  public servicesReq: any = [];
  private listSelect: any;
  public nursesList: any = [];
  private services_id: any;
  map: any;
  public user_id: any;
  public nurse_id: any;
  public serviceType: any;
  public nurse_type: any;
  public services: any
  public requestDetail: any = [];
  public servicetype_id: any;
  public lat: any;
  public lon: any;
  public nurselat: any;
  public defaultNurse: any = 'assets/imgs/category.png';
  public subscription:any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public geolocation: Geolocation,
    public userServices: UserServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private nativeGeocoder: NativeGeocoder) {
    this.user_id = localStorage.getItem('user_id');
    this.servicesReq = navParams.get('requestData');
    this.servicetype_id = this.servicesReq.service_id;
    this.lat = localStorage.getItem('lati');
    this.lon = localStorage.getItem('loni');
    this.nurselat = navParams.get('nurseList');

    console.log("user lat long", this.lat, this.lon);
    // this.lat=22.7196;
    // this.lon=75.8577;

    /* this.userServices.getAllNurse(this.servicetype_id,this.lat,this.lon).subscribe(res=>{
     console.log(res);
      this.nursesList = res.result;
      console.log("hello nurse",this.nursesList); 
     
    }) */

    
    //TODO: Get subscription details & total request sent or check if can contiunue with subscription
    this.userServices.getUserSubscription(this.user_id).subscribe(res=>{
      console.log(res);
      this.subscription = res.result;
    })

  }
  bookNurse(nurse_id, nurse_mobile) {
    //TODO: check subscription
    //this.servicesReq['nurse_id'] = nurse_id;
    //this.servicesReq['nurseMobile'] = nurse_mobile;
    this.servicesReq['user_id'] = this.user_id;
    this.servicesReq['subscription'] = this.subscription;
    this.navCtrl.setRoot('PaymentPage', { 'requestData': this.servicesReq})

    //console.log("hello request data",this.servicesReq,this.user_id,"nurse id",nurse_id);

  }
  next() {
    this.slides.slideNext();
  }


  ionViewDidLoad() {

    this.mapsdata();
    //this.loadMap();




    console.log('ionViewDidLoad Complete-peronalcare');
  }



  info() {
    $(".info-popup").toggle();
  }
  close() {
    $(".info-popup").hide();
  }
  goToSlide() {

    this.slides.slideNext();
  }

  mapsdata() {


    console.log("ram", this.nurselat)



    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      mapTypeControl: false,
      center: new google.maps.LatLng(this.lat, this.lon),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    var marker_icon1 = {
      url: "assets/imgs/marker.png",
      scaledSize: new google.maps.Size(30, 45)
    };
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.lat, this.lon),
      map: map,
      icon: marker_icon1
    });


    for (i = 0; i < this.nurselat.length; i++) {
      var marker_icon = {
        url: "assets/imgs/nurse_markar.png",
        scaledSize: new google.maps.Size(20, 25)
      };
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.nurselat[i].lat, this.nurselat[i].lon),
        map: map,
        icon: marker_icon
      });


    }

  }

  detail(place) {
    console.log(place.description);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.forwardGeocode(place.description, options)
      .then((coordinates: NativeGeocoderForwardResult[]) => {
        this.lat = coordinates[0].latitude;
        this.lon = coordinates[0].longitude;
        this.mapsdata();
        console.log('The coordinates are latitude=' + this.lat + ' and longitude=' + this.lon)
      }



      )
      .catch((error: any) => console.log(error));



  }
}
