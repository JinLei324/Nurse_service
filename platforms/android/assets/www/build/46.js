webpackJsonp([46],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {MyprofilePage} from "../myprofile/myprofile";
//import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';





/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, userServices, alertCtrl, loadingCtrl, formBuilder, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServices = userServices;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.lastImage = null;
        this.updateEditData = {};
        this.defaultPic = 'assets/imgs/user.png';
        this.user_id = localStorage.getItem('user_id');
        console.log(this.user_id);
        this.userServices.getprofile(this.user_id).subscribe(function (res) {
            console.log(res);
            _this.firstname = res.result.firstname;
            _this.lastname = res.result.lastname;
            _this.email = res.result.email;
            _this.phone_number = res.result.phone_number;
            _this.date_of_birth = res.result.date_of_birth;
            _this.gender = res.result.gender;
            _this.docName = res.result.doctor_name;
            _this.docEmail = res.result.doctor_email;
            _this.docMobile = res.result.doctor_phone_number;
            _this.userPic = res.result.image;
            if (_this.userPic == null || _this.userPic == "") {
                _this.userPic = _this.defaultPic;
            }
        });
        this.authForm = formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[A-Za-z ]{1,32}')])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[A-Za-z ]{1,32}')])],
            phone_number: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]{1,15}'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])],
            date_of_birth: [''],
            gender: [''],
            docName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[A-Za-z ]{1,32}')])],
            docEmail: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])],
            docMobile: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]{1,15}'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)])],
        });
    }
    EditProfilePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            subTitle: 'Profile Update successfully',
            buttons: ['ok']
        });
        alert.present();
        this.navCtrl.setRoot('MyprofilePage');
    };
    EditProfilePage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Updataion failed'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.userGender = function (value) {
        this.gender = value;
        console.log(value);
    };
    EditProfilePage.prototype.update = function (value) {
        var _this = this;
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
        console.log("all indof", this.email, this.firstname, this.lastname, this.phone_number, this.gender, this.docEmail, this.docName, this.docMobile);
        if (this.filename == undefined) {
            this.userServices.userUpdateprofile(this.user_id, value).subscribe(function (res) {
                if (res.message == "successfull") {
                    _this.presentAlert();
                }
                else {
                    _this.presentLoadingDefault();
                }
            });
        }
        else {
            this.uploadImage();
        }
    };
    EditProfilePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    EditProfilePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            //this.presentToast('Error while selecting image.');
        });
    };
    EditProfilePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            //alert(this.lastImage);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    EditProfilePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    EditProfilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        this.filename = newFileName;
        return newFileName;
    };
    EditProfilePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    EditProfilePage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = "http://www.air.sideworkapps.com/nursingondemand/webservice/user_update";
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        this.filename = this.lastImage;
        console.log("file name", this.filename);
        var options = {
            fileKey: "image",
            fileName: this.filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'image': this.filename,
                'user_id': this.user_id,
                'firstname': this.firstname,
                'lastname': this.lastname,
                'gender': this.gender,
                'date_of_birth': this.date_of_birth,
                'email': this.email,
                'phone_number': this.phone_number,
                'doctor_email': this.docEmail,
                'doctor_name': this.docName,
                'doctor_phone_number': this.docMobile
            }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        //Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            console.log(data);
            _this.imgres = JSON.parse(data.response);
            console.log("pic ka response", _this.imgres);
            if (_this.imgres.message == "successfull") {
                _this.navCtrl.push('MyprofilePage');
            }
            _this.loading.dismissAll();
            _this.presentToast('Image successful uploaded.');
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/edit-profile/edit-profile.html"*/'<!--\n  Generated template for the MyprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n  <div class="edit-p">\n    <label>\n      <img src={{pathForImage(lastImage)?pathForImage(lastImage):userPic}} (click)="presentActionSheet()">\n\n    </label>\n  </div>\n\n\n  <div class="input-design">\n    <form [formGroup]="authForm" (ngSubmit)="update(authForm.value)">\n      <ion-list>\n\n        <ion-item\n          [ngClass]="{\'error-border\':!authForm.controls.firstname.valid && authForm.controls.firstname.touched}">\n          <ion-label color="primary" floating>First Name</ion-label>\n          <ion-input formControlName="firstname" [(ngModel)]="firstname"></ion-input>\n        </ion-item>\n        <div class="errorsText"\n          *ngIf="authForm.controls.firstname.hasError(\'pattern\') && authForm.controls.firstname.touched">\n          <p>Invalid Name</p>\n        </div>\n\n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.lastname.valid && authForm.controls.lastname.touched}">\n          <ion-label color="primary" floating>Last Name</ion-label>\n          <ion-input formControlName="lastname" type="text" [(ngModel)]="lastname"></ion-input>\n        </ion-item>\n        <div class="errorsText"\n          *ngIf="authForm.controls.lastname.hasError(\'pattern\') && authForm.controls.lastname.touched">\n          <p>Invalid Name</p>\n        </div>\n\n        <ion-item\n          [ngClass]="{\'error-border\':!authForm.controls.phone_number.valid && authForm.controls.phone_number.touched}">\n          <ion-label color="primary" floating>Phone Number</ion-label>\n          <ion-input formControlName="phone_number" type="tel" [(ngModel)]="phone_number"></ion-input>\n        </ion-item>\n\n\n        <div *ngIf="authForm.controls.phone_number.hasError(\'pattern\') && authForm.controls.phone_number.touched">\n          <p>Invalid Phone</p>\n        </div>\n\n        <div\n          *ngIf="authForm.controls.phone_number.hasError(\'minlength\') || authForm.controls.phone_number.hasError(\'maxlength\') ">\n          <p>Please Enter 10 digit only </p>\n        </div>\n\n\n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n          <ion-label color="primary" floating>Eamil Address</ion-label>\n          <ion-input [(ngModel)]="email" formControlName="email" type="email"></ion-input>\n        </ion-item>\n        <div *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n          <p>Invalid Email</p>\n        </div>\n\n        <ion-item style=" margin: 13px 0px;">\n          <ion-label color="primary">Date of Birth</ion-label>\n          <ion-input type="date" formControlName="date_of_birth" [(ngModel)]="date_of_birth"></ion-input>\n        </ion-item>\n\n\n\n        <ion-item style="border-bottom: 1px solid #ccc;">\n          <ion-label>Gender</ion-label>\n          <ion-select (ionChange)="userGender(gender)" [(ngModel)]="gender" formControlName="gender">\n            <ion-option value="male">Male</ion-option>\n            <ion-option value="female">Female</ion-option>\n\n          </ion-select>\n        </ion-item>\n\n        <p style="    text-align: center;\nfont-size: 18px;\nfont-weight: 500;\ncolor: #177ec0;">Doctor Information</p>\n\n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.docName.valid && authForm.controls.docName.touched}">\n          <ion-label color="primary" floating> Name</ion-label>\n          <ion-input [(ngModel)]="docName" formControlName="docName"></ion-input>\n        </ion-item>\n        <div class="errorsText"\n          *ngIf="authForm.controls.docName.hasError(\'pattern\') && authForm.controls.docName.touched">\n          <p>Invalid Name</p>\n        </div>\n\n\n        <ion-item [ngClass]="{\'error-border\':!authForm.controls.docEmail.valid && authForm.controls.docEmail.touched}">\n          <ion-label color="primary" floating>Email</ion-label>\n          <ion-input [(ngModel)]="docEmail" formControlName="docEmail"></ion-input>\n        </ion-item>\n        <div *ngIf="authForm.controls.docEmail.hasError(\'pattern\') && authForm.controls.docEmail.touched">\n          <p>Invalid Email</p>\n        </div>\n\n\n        <ion-item\n          [ngClass]="{\'error-border\':!authForm.controls.docMobile.valid && authForm.controls.docMobile.touched}">\n          <ion-label color="primary" floating>Phone Number</ion-label>\n          <ion-input [(ngModel)]="docMobile" formControlName="docMobile" type="tel"></ion-input>\n        </ion-item>\n        <div *ngIf="authForm.controls.docMobile.hasError(\'pattern\') && authForm.controls.docMobile.touched">\n          <p>Invalid Phone</p>\n        </div>\n\n        <div\n          *ngIf="authForm.controls.docMobile.hasError(\'minlength\') || authForm.controls.docMobile.hasError(\'maxlength\') ">\n          <p>Please Enter 10 digit only </p>\n        </div>\n      </ion-list>\n\n      <div padding>\n        <button ion-button full class="update" [disabled]="!authForm.valid">Update</button>\n      </div>\n    </form>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=46.js.map