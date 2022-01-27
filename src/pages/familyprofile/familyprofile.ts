import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams,Platform,
  ActionSheetController,ToastController} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import {NursingselectPage} from "../nursingselect/nursingselect";
import * as $ from 'jquery'
//import {MyprofilePage} from "../myprofile/myprofile";
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

declare let cordova: any;

/**
 * Generated class for the FamilyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-familyprofile',
  templateUrl: 'familyprofile.html',
})
export class FamilyprofilePage {

  loading: Loading;
  authForm:FormGroup;
  public gender:any;
  public user_id:any;
  public filename:any;
  public lastImage: string = null;
  public familydata:any=[];
  public userPic:any="assets/imgs/userpik.png";
 

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public userServices: UserServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController, public camera : Camera,
              private transfer: Transfer, private file: File,
              private filePath: FilePath, public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,public platform: Platform,) {
    this.user_id = localStorage.getItem('user_id');
    

    this.authForm = formBuilder.group({
      firstname: ['', Validators.compose([ Validators.pattern('[A-Za-z ]{1,32}')])],
      lastname: ['', Validators.compose([ Validators.pattern('[A-Za-z ]{1,32}')])],
      relation: ['', Validators.compose([ Validators.pattern('[A-Za-z ]{1,32}')])],
      gender:[''],
       dob: [''],
        email: ['', Validators.compose([ Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],
        mobile:['', Validators.compose([ Validators.pattern('[0-9]{1,15}'),Validators.minLength(10),Validators.maxLength(10)])],
        docName: ['', Validators.compose([ Validators.pattern('[A-Za-z ]{1,32}')])],
        docEmail:['', Validators.compose([ Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],
        docMobile: ['', Validators.compose([ Validators.pattern('[0-9]{1,15}'),Validators.minLength(10),Validators.maxLength(10)])],

    });

  }

  ionViewDidLoad() {

  

    console.log('ionViewDidLoad FamilyprofilePage');
  }
  userGender(value){
    this.gender = value;
    console.log(this.gender);

  }
    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            content: 'Successfully Add member'
        });

        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 2000);
    }

  onSubmit(value: any){

    console.log("family data",value);
    this.familydata['firstname'] = value.firstname;
    this.familydata['lastname'] = value.lastname;
    this.familydata['relation'] = value.relation;
    this.familydata['gender']  = value.gender;
    this.familydata['dob'] = value.dob;
    this.familydata['email'] = value.email;
    this.familydata['mobile'] = value.mobile;
    this.familydata['docName'] = value.docName;
    this.familydata['docEmail'] = value.docEmail;
    this.familydata['docMobile'] = value.docMobile;
   
    console.log("family array",this.familydata);
    if(this.filename==undefined || this.filename==null || this.filename==""){
    this.userServices.addFamily(this.user_id,value).subscribe(res=>{

        if(res.message=="successfull"){
          this.presentLoadingDefault();
          this.navCtrl.push('MyprofilePage');
        }
      })
    }
    else{
      this.uploadImage();
    }
  
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
        title: 'Select Image Source',
        buttons: [
            {
                text: 'Load from Library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    actionSheet.present();
}
public takePicture(sourceType) {
  // Create options for the Camera Dialog
  var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
  };

  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          this.filePath.resolveNativePath(imagePath)
              .then(filePath => {

                  let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
              });
      } else {
          var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
          var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
  }, (err) => {
      //this.presentToast('Error while selecting image.');
  });
}
private copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
      //alert(this.lastImage);
  }, error => {
      this.presentToast('Error while storing file.');
  });
}
public pathForImage(img) {
  if (img === null) {
      return '';
  } else {
      return cordova.file.dataDirectory + img;
  }
}
private createFileName() {
  var d = new Date(),
      n = d.getTime(),

      newFileName =  n + ".jpg";
      this.filename = newFileName;
  return newFileName;

}
private presentToast(text) {
  let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
  });
  toast.present();
}
public uploadImage() {
  // Destination URL
  var url = "http://webappsol.biz/WORKSPACE2/nursingondemand/webservice/add_family_members";

  // File for Upload
  var targetPath = this.pathForImage(this.lastImage);

  // File name only
  this.filename = this.lastImage;
  console.log("file name",this.filename)

  var options = {
      fileKey: "image",
      fileName: this.filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'image': this.filename,
          'user_id': this.user_id ,
          'firstname':this.familydata.firstname,
          'lastname':this.familydata.lastname,
          'gender':this.familydata.gender,
          'date_of_birth':this.familydata.dob,
          'email':this.familydata.email,
          'phone_number':this.familydata.mobile,
          'doctor_email':this.familydata.docEmail,
          'doctor_phone_number':this.familydata.docMobile,
          'doctor_name':this.familydata.docName,
          'relation':this.familydata.relation

   
          }
  };

  const fileTransfer: TransferObject = this.transfer.create();

  this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
  });
  this.loading.present();

  //Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
      console.log(data);

      this.loading.dismissAll()
      this.presentToast('Image successful uploaded.');
      this.navCtrl.push('MyprofilePage');
  }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
  });
}




}
