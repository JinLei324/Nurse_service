import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
//import {PaymentMethodPage} from "../payment-method/payment-method";
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import {PaymentdetailPage} from "../paymentdetail/paymentdetail";

/**
 * Generated class for the PricingplansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pricingplans',
  templateUrl: 'pricingplans.html',
})
export class PricingplansPage {
  private priceingList: any=[];
  public hourlyplan:any=[];
  private planeFirst: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userServices: UserServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {

                this.userServices.getAllpriceList().subscribe(res=>{
                  console.log(res);
               
                  this.priceingList = res.result;
                  console.log(this.priceingList);
                })
                this.userServices.getAllPriceListDaily().subscribe(res=>{
                  console.log(res);
                  this.hourlyplan = res.result;
              })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PricingplansPage');
    

  }
  buy(id,priceName){
    console.log(id,priceName);
    this.navCtrl.setRoot('PaymentdetailPage',{'price_name':priceName});

  }
}
