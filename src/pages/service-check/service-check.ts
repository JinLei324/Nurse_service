import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import {NursingselectPage} from "../nursingselect/nursingselect";
//import {CompleteRequestPage} from "../complete-request/complete-request";
//import {CompletePersonalCarePage} from "../complete-personal-care/complete-personal-care";
import * as $ from 'jquery'
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

/**
 * Generated class for the ServiceCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-check',
  templateUrl: 'service-check.html',
})
export class ServiceCheckPage {
  loading: Loading;
  public reuqestData: any = [];
  private serviceList: any;
  private services_id: any;
  check:any=[];
  private selecteList: string;
  private seleList: any = ''
  public form: FormGroup;
  public selectedArray:any=[];
  public serviceName_id:any=[];
  public servicesId:any;
  public servicetype_id:any;
  public serviceName:any;
  public nursesList:any;
  public lat:any;
  public lon:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userServices: UserServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private _FB: FormBuilder) {
                this.form = this._FB.group({
                  name       	  : ['', Validators.required],
                  technologies     : this._FB.array([
                     this.initTechnologyFields()
                  ])
               });

    this.reuqestData = navParams.get('requestData');
   this.services_id = navParams.get('service_id');
   
    if(this.services_id==1){
      this.serviceName = "Nursing Care";
      
    }else{
      this.serviceName = "Personal Care";
    }
   
    this.lat = localStorage.getItem('lati');
    this.lon = localStorage.getItem('loni');

    console.log("request data ",this.reuqestData);
    this.servicetype_id = this.reuqestData.service_id;


    this.userServices.getAllNurse(this.servicetype_id,this.lat,this.lon).subscribe(res=>{
      console.log(res);
       this.nursesList = res.result;
       console.log("hello nurse",this.nursesList); 
      
     })
     let loading = this.loadingCtrl.create({
      content: 'Please wait....'
    });
  
    loading.present();
    this.userServices.services(this.services_id).subscribe(datas => {
      console.log("servics list",datas)
      this.serviceList= datas.result.slice(0,9);
      loading.dismiss();

    })



  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Please select at least one service.'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Successfull add service'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  ionViewDidLoad() {



    console.log('ionViewDidLoad ServiceCheckPage');
  }

selectMember(data){
if (data.checked == true) {
this.selectedArray.push(data);
} else {
let newArray = this.selectedArray.filter(function(el) {
return el.id !== data.id;
});
this.selectedArray = newArray;
}

console.log(this.selectedArray);
}

  next(){
    console.log(this.selectedArray);
   if( this.selectedArray==""){
     this.presentLoadingDefault();
   }else{
    for(var x=0;x<this.selectedArray.length;x++){
      this.serviceName_id.push(this.selectedArray[x].id);
      console.log(this.serviceName_id);
      this.servicesId=this.serviceName_id.join(",");

     console.log(this.servicesId);
     this.reuqestData['servicesNameid']= this.servicesId;
     

    }
    this.navCtrl.setRoot('CompletePersonalCarePage',{'requestData':this.reuqestData,'nurseList':this.nursesList})
   }
    
  }
  append_fun(){
    $('.pop_box').show();
  }
  // add_fun(){
    


  // }
  initTechnologyFields() : FormGroup
  {
     return this._FB.group({
        name 		: ['', Validators.required]
     });
  }

  // addNewInputField() : void
  // {
  //    const control = <FormArray>this.form.controls.technologies;
  //    control.push(this.initTechnologyFields());
  // }
  // removeInputField(i : number) : void
  //  {
  //     const control = <FormArray>this.form.controls.technologies;
  //     control.removeAt(i);
  //  }
   manage(val : any) : void
   {
      console.dir(val.name);

      this.userServices.addNewservice(this.services_id,val.name).subscribe(res=>{
        console.log(res);
        if(res.result=="successfull"){
          this.presentLoadingDefault1();
          $('.pop_box').hide();
          this.userServices.services(this.services_id).subscribe(datas => {
           
            this.serviceList= datas.result;
            console.log("servci list",this.serviceList)
      
          })
        }
        console.log(res);

      })
      
   }
   other(){
    let loading = this.loadingCtrl.create({
      content: 'plaese wait'
    });
  
    loading.present();
  
    this.userServices.services(this.services_id).subscribe(datas => {
      console.log("servics list",datas)
      if(datas.message=="successful"){
        this.serviceList= datas.result;
        loading.dismiss();

      }
     
    })

   }
}
