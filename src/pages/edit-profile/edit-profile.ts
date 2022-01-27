import { Component } from '@angular/core';
import {AlertController, IonicPage, Loading, LoadingController, NavController, ToastController,NavParams ,ActionSheetController, Platform} from 'ionic-angular';
import {UserServiceProvider} from "../../providers/user-service/user-service";
//import {MyprofilePage} from "../myprofile/myprofile";

//import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

declare let cordova: any;

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
    lastImage: string = null;

  loading: Loading;

  public userEditProfile
  public updateEditData:any = {}
  public firstname: any;
  public lastname: any;
  public email: any;
  public phone_number: any;
  public gender: any;
  public date_of_birth: any;
  public user_id: any;
  authForm: FormGroup;
  public docName:any;
  public docEmail:any;
  public docMobile:any;
  public defaultPic:any='assets/imgs/user.png';
  public filename:any;
  public userPic:any;
  public imgres:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userServices: UserServiceProvider,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              public formBuilder: FormBuilder,
              public camera : Camera,
              private transfer: Transfer, private file: File,
              private filePath: FilePath, public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,public platform: Platform,) {
                this.user_id = localStorage.getItem('user_id');
                console.log(this.user_id);
               
                                                                                               
             this.userServices.getprofile(this.user_id).subscribe(res=>{
               console.log(res);
               this.firstname = res.result.firstname;
               this.lastname = res.result.lastname;
               this.email = res.result.email;
               this.phone_number = res.result.phone_number;
               this.date_of_birth = res.result.date_of_birth;
               this.gender = res.result.gender;
               this.docName = res.result.doctor_name;
               this.docEmail = res.result.doctor_email;
               this.docMobile = res.result.doctor_phone_number;
               this.userPic = res.result.image;
               if(this.userPic == null || this.userPic==""){
                   this.userPic = this.defaultPic;
               }
             })
             this.authForm = formBuilder.group({
              firstname: ['', Validators.compose([ Validators.pattern('[A-Za-z ]{1,32}')])],
              lastname: ['', Validators.compose([ Validators.pattern('[A-Za-z ]{1,32}')])],
              phone_number: ['', Validators.compose([ Validators.pattern('[0-9]{1,15}'),Validators.minLength(10),Validators.maxLength(10)])],
              email: ['', Validators.compose([ Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],
              date_of_birth:[''],
              gender: [''],
              docName: ['', Validators.compose([ Validators.pattern('[A-Za-z ]{1,32}')])],
              docEmail: ['', Validators.compose([ Validators.pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$') ])],
              docMobile: ['', Validators.compose([ Validators.pattern('[0-9]{1,15}'),Validators.minLength(10),Validators.maxLength(10)])],
            });
           
          
            
                
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      subTitle: 'Profile Update successfully',
      buttons: ['ok']
     
    });
    alert.present();
    this.navCtrl.setRoot('MyprofilePage');
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Updataion failed'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  userGender(value){
    this.gender = value;
    console.log(value);

  }
  update(value){
    console.log(value);
    this.firstname = value.firstname;
    this.lastname = value.lastname;

      this.email = value.email;
      this.phone_number = value.phone_number;
      this.date_of_birth = value.date_of_birth;
      this.gender = value.gender;
      this.docName = value.docName;
      this.docEmail = value.docEmail;
      this.docMobile = value.docMobile;
      console.log("all indof",this.email,this.firstname,this.lastname,this.phone_number,this.gender,this.docEmail,this.docName,this.docMobile);
      
     


     if(this.filename==undefined){
      this.userServices.userUpdateprofile(this.user_id,value).subscribe(res=>{
      if(res.message=="successfull"){
       this.presentAlert();
      }
      else{
        this.presentLoadingDefault();
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
        var url = "http://www.air.sideworkapps.com/nursingondemand/webservice/user_update";

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
                'firstname':this.firstname,
                 'lastname':this.lastname,
                 'gender':this.gender,
                 'date_of_birth':this.date_of_birth,
                 'email':this.email,
                 'phone_number':this.phone_number,
                 'doctor_email':this.docEmail,
                 'doctor_name':this.docName,
                 'doctor_phone_number':this.docMobile
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
            this.imgres = JSON.parse(data.response);
           console.log("pic ka response",this.imgres)
           if(this.imgres.message=="successfull"){
              this.navCtrl.push('MyprofilePage');
           }

            this.loading.dismissAll()
            this.presentToast('Image successful uploaded.');
           
        }, err => {
            this.loading.dismissAll()
            this.presentToast('Error while uploading file.');
        });
    }
}
