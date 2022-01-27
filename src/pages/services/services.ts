import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
//import {ServiceCheckPage} from "../service-check/service-check";
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import { BothservicesPage } from '../bothservices/bothservices';
//import {CompletePersonalCarePage} from "../complete-personal-care/complete-personal-care";
//import { NursingcareservicesPage } from '../nursingcareservices/nursingcareservices';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  loading: Loading;
  
  private servicsRequestData: any=[];
  private servicesList: any;

  public user_id:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userServices: UserServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,) {

    this.servicsRequestData = this.navParams.get('requestData');
 
   this.user_id = localStorage.getItem('user_id');



    console.log("request data",this.servicsRequestData,this.user_id);

  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'please wait.... '
    });
    loading.present();
    this.userServices.servicesType().subscribe(serviList =>{
      

      this.servicesList = serviList.result.slice(0,1);
      //this.servicesList = serviList.result;
      console.log("service list",this.servicesList);
      loading.dismiss();
    })

    console.log('ionViewDidLoad ServicesPage');
  }


    servicecheck(services_id){
    console.log(services_id);
 
    this.servicsRequestData['service_id'] = services_id;
    console.log(this.servicsRequestData)
    

   this.navCtrl.setRoot('ServiceCheckPage',{'requestData':this.servicsRequestData,'service_id':services_id} );
    }
    viewServices(){
      this.navCtrl.push('BothservicesPage');
    }
}
