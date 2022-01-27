import { Component } from '@angular/core';

import { UserServiceProvider } from '../../providers/user-service/user-service';
import {AlertController, IonicPage, Loading, LoadingController, NavController, NavParams,Platform,
  ActionSheetController,ToastController} from 'ionic-angular';
  import {FormBuilder, FormGroup, Validators} from "@angular/forms";
  import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
//import { MyprofilePage } from '../myprofile/myprofile';

declare let cordova: any;

/**
 * Generated class for the EditmemberProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editmember-profile',
  templateUrl: 'editmember-profile.html',
})
export class EditmemberProfilePage {
  public member_id:any;
  public firstname:any;
  public lastname:any;
  public relation:any;
  public dob:any;
  public email:any;
  public mobile:any;
  public docName:any;
  public docEmail:any;
  public docMobile:any; 
  loading: Loading;
  authForm:FormGroup;
  public lastImage: string = null;
  public filename:any;
  public user_id:any;
  public userPic:any="assets/imgs/userpik.png";
  public gender:any;
  public profilePic:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userServices:UserServiceProvider,public formBuilder: FormBuilder,
    public actionSheetCtrl: ActionSheetController,public camera : Camera,
    private transfer: Transfer, private file: File,public platform: Platform,
    private filePath: FilePath,private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,public toastCtrl: ToastController) {
    this.member_id = navParams.get('member_id');
    console.log(this.member_id);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.userServices.getMemberProfile(this.member_id).subscribe(res=>{
      console.log(res);

      if(res.message=="successfull"){
        loading.dismiss();
        this.firstname = res.result.firstname;
        this.lastname = res.result.lastname;
        this.relation = res.result.relation;
        this.gender = res.result.gender;
        this.email = res.result.email;
        this.mobile = res.result.phone_number;
        this.docEmail = res.result.doctor_email;
        this.docMobile = res.result.doctor_phone_number;
        this.docName = res.result.doctor_name;
        this.dob = res.result.date_of_birth;
        this.profilePic = res.result.image;
        if(this.profilePic==null || this.profilePic==undefined || this.profilePic==""){
          this.profilePic = this.userPic;
        }
        console.log(res);
      }
        
    })
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
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Successfully update profile'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  presentLoadingDefault1() {
    let loading = this.loadingCtrl.create({
      content: 'Updation Failed'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }
  userGender(value){
    this.gender = value;

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditmemberProfilePage');
  }


  onSubmit(value){    
console.log(value,this.filename);


this.firstname = value.firstname;
this.lastname = value.lastname;
this.email = value.email;
this.mobile = value.mobile;
this.gender =value.gender;
this.dob = value.dob;
this.docName = value.docName;
this.docMobile = value.docMobile;
this.docEmail = value.docEmail;
this.relation = value.relation;

if(this.filename==undefined || this.firstname == null ||this.filename ==""){
  this.userServices.updateFamilymember(this.member_id,value).subscribe(res=>{
    console.log(res);
   if(res.message=="Member Information Updated successfull"){
     this.presentLoadingDefault();
     this.navCtrl.push('MyprofilePage');
   }
   else{
       this.presentLoadingDefault1();
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
  var url = "http://webappsol.biz/WORKSPACE2/nursingondemand/webservice/update_family_members?";

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
          'member_id': this.member_id, 
          'firstname':this.firstname,
          'lastname':this.lastname,
          'gender':this.gender,
          'date_of_birth':this.dob,
          'email':this.email,
          'phone_number':this.mobile,
          'doctor_email':this.docEmail,
          'doctor_phone_number':this.docMobile,
          'doctor_name':this.docName,
          'relation':this.relation

   
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
