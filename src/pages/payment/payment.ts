import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
//import { NursingdemandmapPage } from '../nursingdemandmap/nursingdemandmap';
import { UserServiceProvider } from "../../providers/user-service/user-service";
import * as $ from 'jquery';
import { Stripe } from '@ionic-native/stripe';

//import { CompleteRequestPage } from '../complete-request/complete-request';
//import { HttpParams } from '@angular/common/http';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  payment: string = "debitCard";
  public plan_id: any;
  public loading: any;
  public requestDetail: any = {};
  public total_price: any;
  public serviceTypeid: any;
  public requestDetails: any;
  public requestData: any;
  public priceList: any = [];
  public hourlyplan: any = [];
  public cardNumber: any;
  public expireOn: any;
  public cvvNumber: any;
  public iAgree: boolean = true;
  public expireOnInvalid = false;
  public cvvNumberInvalid = false;
  public cardNumberInvalid = false;
  public subscription:any;
  public totalVisit = 1;



  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public userServices: UserServiceProvider,
    public loadingCtrl: LoadingController,
    private stripe: Stripe, public toast: ToastController
  ) {


    this.requestData = navParams.get('requestData');
    console.log("full request dada", this.requestData);
    this.subscription = this.requestData.subscription;
    if(!this.subscription){
      this.serviceTypeid = this.requestData.service_id;
  
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
  
      this.payment = 'debitCard';
  
      this.loading.present();
  
      this.userServices.priceList(this.serviceTypeid).subscribe(res => {
        if (res.message = "successfull") {
          console.log(res);
          this.priceList = res.result;
  
          console.log("price data", this.priceList);
  
          /* this.priceList.forEach(price => {
            this.priceParentList[price.plan_name] = price;
          }); */
  
          this.loading.dismiss();
        }
  
  
      })
  
      this.userServices.getAllPriceListDaily().subscribe(res => {
        console.log(res);
        this.hourlyplan = res.result;
      })
    }
    else{
      this.plan_id = this.subscription.plan_id;
      setTimeout(()=>{
        $(".paybox").show();
      },1000)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully booked nurse'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Failed to booking nurse'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  pay() {
    console.log("full request data,", this.requestData, this.plan_id);
    this.userServices.request_care(this.requestData, this.plan_id).subscribe(res => {
      console.log("complete request data response", res);
      if (res.message == "successfull") {
        this.presentLoadingDefault();
        //this.requestDetail['nurse_id'] = res.result.unique_nurse_id;
        //this.requestDetail['nurse_type'] = res.result.nurse_type;
        this.requestDetail['service_type'] = res.result.service_type;
        this.requestDetail['services'] = res.result.services;
        this.requestDetail['requestId'] = res.result.id;
        //this.requestDetail['nurseMobile'] = this.requestData.nurseMobile;
        console.log(this.requestDetail);
        //  this.navCtrl.setRoot(CompleteRequestPage,{'requestDetails':this.requestDetail,'requestData':this.requestData});
        //$(".paybox").hide();
        this.navCtrl.setRoot('NursingdemandmapPage', { 'requestData': this.requestData.nurseMobile, 'request_id': res.result.id })
      }
      else {
        this.presentLoadingDefault1();
      }
    })

  }

  PayAmount() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    //integrate stripe
    this.checkValue();

    if (this.expireOnInvalid || this.cardNumberInvalid || this.cvvNumberInvalid) {
      loading.dismiss();
      return;
    }
    //this.stripe.setPublishableKey('pk_test_CKh2F7OEmNF1Cx1ousqLAs1300CY3ULxUA');
    this.stripe.setPublishableKey('pk_live_037aTZbeLJfWSD3T82cK7bpa');
    let exp = this.expireOn.split("-");
    let card = {
      number: this.cardNumber,
      expMonth: exp[1],
      expYear: exp[0],
      cvc: this.cvvNumber
    };

    console.log(card);

    this.stripe.createCardToken(card).then(token => {
      console.log(token.id);
      this.total_price = this.total_price * 100;
      let params = 'source=' + token.id + '&amount=' + this.total_price + '&currency=usd';

      this.userServices.paytoStripe(params).subscribe((response) => {
        loading.dismiss();
        console.log(response)
        $(".paybox").show();
      }, (err) => {
        loading.dismiss();
        this.toast.create({
          message: err.message,
          duration: 3000,
          position: 'bottom'
        }).present();
      });
    })
      .catch(error => {
        loading.dismiss();
        this.toast.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
        console.error(error)
      });


  }


  /* viewPrice(price, plan_id) {
    this.plan_id = plan_id
    console.log("plan id", this.plan_id)
    this.total_price = price;
    this.payment = 'creditCard';
    console.log(price);
  } */

  viewPrice(plan) {
    this.plan_id = plan.id
    console.log("plan id", this.plan_id)
    this.total_price = plan.price;
    this.payment = 'creditCard';
    this.totalVisit = parseInt(plan.visits) + parseInt(plan.free_visits);
    console.log(plan.price);
  }

  checkValue() {
    this.cardNumberInvalid = typeof this.cardNumber == "undefined" || this.cardNumber == "";
    this.cvvNumberInvalid = typeof this.cvvNumber == "undefined" || this.cvvNumber == "";
    this.expireOnInvalid = typeof this.expireOn == "undefined" || this.expireOn == "";
  }

}
