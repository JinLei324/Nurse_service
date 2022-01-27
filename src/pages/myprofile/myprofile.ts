import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams} from 'ionic-angular';
//import {EditProfilePage} from "../edit-profile/edit-profile";
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import {FamilyprofilePage} from "../familyprofile/familyprofile";
//import {ViewfamilyPage} from "../viewfamily/viewfamily";
import * as $ from 'jquery'


/**
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprofile',
  templateUrl: 'myprofile.html',
})
export class MyprofilePage {

  loading: Loading;
  user_id:any
    current: string = "current";
  public userProfile:any
 public userName:any;
 public userGender:any;
  public date_of_birth: any;
  private profileImg: any;
  public docName:any;
  public docEmail:any;
  public docPhone:any;
  public userPic:any;
  public defaultPic:any='assets/imgs/user.png';
  public defaultgender:any="N/A";
  public drname:any="Dr. Name";
  public drData:any=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userServices: UserServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {

    
    this.user_id = localStorage.getItem('user_id');
    
    this.userServices.getprofile(this.user_id).subscribe(res=>{
      this.userName = res.result.firstname +" "+ res.result.lastname;
      this.userGender = res.result.gender;
      let birthday = res.result.date_of_birth;
      var data = birthday.split("-", 3);
      this.date_of_birth = birthday ? (data[1] + "-" + data[2] + "-" + data[0]) : "N/A";
      this.docName = res.result.doctor_name;
      this.docEmail = res.result.doctor_email;
      this.docPhone = res.result.doctor_phone_number;
      this.userPic = res.result.image;
      if(this.userPic=="" || this.userPic==undefined){
        this.userPic = this.defaultPic;
        console.log("user pic",this.userPic);
      }
      // console.log("doc name",this.docName);
    // if(this.docName==null || this.docName==undefined || this.docName==""){
    //   this.docName = "Dr. Name";
    //   console.log("dr name",this.docName);
    // }
     
    })

    console.log('ionViewDidLoad MyprofilePage');
      this.current='current';
  }




  addfamily(){
    this.navCtrl.setRoot('FamilyprofilePage')

  }

  viewFamily(){
    this.navCtrl.setRoot('ViewfamilyPage');
  }

  editprofile(){
   
    this.navCtrl.setRoot('EditProfilePage');
  }

  editmy(){
    $(".bg-info input").css("border-color","#d4d4d4");
    $(".bg-info p span").hide();
    $(".show1").show();
    $(".hide1").hide();
  }

  savedr(){
    $(".bg-info input").css("border-color","#fff");
    $(".bg-info p span").show();
    $(".show1").hide();
    $(".hide1").show();
    console.log("dr info",this.docEmail,this.docName,this.docPhone);


    if(this.docEmail == "" || this.docEmail==undefined || this.docName=="" ||
    this.docName == undefined || this.docPhone=="" || this.docPhone==undefined){
    alert("please fill all details");
      }else{
            this.drData['user_id'] = this.user_id;
            this.drData['drname'] = this.docName;
            this.drData['drphone'] = this.docPhone;
            this.drData['dremail'] = this.docEmail;
            console.log("dr data",this.drData);
            this.userServices.updateDoctor(this.drData).subscribe(res=>{
              console.log(res);
            })
      }

  }

}
