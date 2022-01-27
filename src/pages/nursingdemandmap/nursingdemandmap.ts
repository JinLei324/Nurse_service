import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
//import { NursingselectPage } from '../nursingselect/nursingselect';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation} from "@ionic-native/geolocation";
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { SMS } from '@ionic-native/sms';
declare var google;


/**
 * Generated class for the NursingdemandmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nursingdemandmap',
  templateUrl: 'nursingdemandmap.html',
})
export class NursingdemandmapPage {
  @ViewChild('map') mapContainer: ElementRef;
  public mobile:any;
  map: any;
  public request_id:any;
  public requestMessage;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public geolocation: Geolocation,
     public callNumber: CallNumber,
     public userService:UserServiceProvider,
     public loadingCtrl: LoadingController,
     private sms: SMS
    ) {
      this.request_id = navParams.get('request_id');
      this.requestMessage = navParams.get('text');
      this.mobile = navParams.get('requestData');
      console.log("request ki id  ",this.request_id);
      this.displayGoogleMap()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NursingdemandmapPage');
  }
  nursingSelect(){
    this.navCtrl.setRoot('NursingselectPage');
  }
  call(){
    this.callNumber.callNumber(this.mobile, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  displayGoogleMap(){

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      console.log(position.coords.latitude);
      let lat:any = position.coords.latitude
      let long:any = position.coords.longitude

      //   //let latLng = new google.maps.LatLng(-34.9290, 138.6010);

      let mapOptions = {
        center: latLng,
        zoom: 14,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }


      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
      //this.getMarkers(this.nursesList);
      this.addUserMarkersToMap(lat,long);

    },(err)=>{
      console.log(err);
    });

  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully cancel this request'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Failed to cancel this request'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  addUserMarkersToMap(lat,long) {
    //alert('hello')
    console.log(lat,long)
    var position = new google.maps.LatLng(lat,long);
    var museumMarker = new google.maps.Marker({position: position,icon:{ url : 'assets/icon/user_map.png'}});
    museumMarker.setMap(this.map);
  }
  cancel(){
   this.userService.cancelRequest(this.request_id).subscribe(res=>{
     console.log(res);
     if(res.result=="successfull"){
       this.presentLoadingDefault();
       this.navCtrl.setRoot('NursingselectPage');
     }
     else{
     this.presentLoadingDefault1();
     }
   })
  }
  message(){
    var options={
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
           intent: 'INTENT'  // Opens Default sms app
          //intent: '' // Sends sms without opening default sms app
        }
}
this.sms.send(this.mobile, 'Dummy text',options)
  .then(()=>{
    alert("success");
  },()=>{
  alert("failed");
  });
}
  
}
