webpackJsonp([44],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditmemberProfilePageModule", function() { return EditmemberProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editmember_profile__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditmemberProfilePageModule = /** @class */ (function () {
    function EditmemberProfilePageModule() {
    }
    EditmemberProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editmember_profile__["a" /* EditmemberProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editmember_profile__["a" /* EditmemberProfilePage */]),
            ],
        })
    ], EditmemberProfilePageModule);
    return EditmemberProfilePageModule;
}());

//# sourceMappingURL=editmember-profile.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditmemberProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
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








/**
 * Generated class for the EditmemberProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditmemberProfilePage = /** @class */ (function () {
    function EditmemberProfilePage(navCtrl, navParams, userServices, formBuilder, actionSheetCtrl, camera, transfer, file, platform, filePath, alertCtrl, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServices = userServices;
        this.formBuilder = formBuilder;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.filePath = filePath;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.lastImage = null;
        this.userPic = "assets/imgs/userpik.png";
        this.member_id = navParams.get('member_id');
        console.log(this.member_id);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.userServices.getMemberProfile(this.member_id).subscribe(function (res) {
            console.log(res);
            if (res.message == "successfull") {
                loading.dismiss();
                _this.firstname = res.result.firstname;
                _this.lastname = res.result.lastname;
                _this.relation = res.result.relation;
                _this.gender = res.result.gender;
                _this.email = res.result.email;
                _this.mobile = res.result.phone_number;
                _this.docEmail = res.result.doctor_email;
                _this.docMobile = res.result.doctor_phone_number;
                _this.docName = res.result.doctor_name;
                _this.dob = res.result.date_of_birth;
                _this.profilePic = res.result.image;
                if (_this.profilePic == null || _this.profilePic == undefined || _this.profilePic == "") {
                    _this.profilePic = _this.userPic;
                }
                console.log(res);
            }
        });
        this.authForm = formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[A-Za-z ]{1,32}')])],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[A-Za-z ]{1,32}')])],
            relation: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[A-Za-z ]{1,32}')])],
            gender: [''],
            dob: [''],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])],
            mobile: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]{1,15}'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)])],
            docName: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[A-Za-z ]{1,32}')])],
            docEmail: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])],
            docMobile: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('[0-9]{1,15}'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].maxLength(10)])],
        });
    }
    EditmemberProfilePage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Successfully update profile'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    EditmemberProfilePage.prototype.presentLoadingDefault1 = function () {
        var loading = this.loadingCtrl.create({
            content: 'Updation Failed'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    EditmemberProfilePage.prototype.userGender = function (value) {
        this.gender = value;
    };
    EditmemberProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditmemberProfilePage');
    };
    EditmemberProfilePage.prototype.onSubmit = function (value) {
        var _this = this;
        console.log(value, this.filename);
        this.firstname = value.firstname;
        this.lastname = value.lastname;
        this.email = value.email;
        this.mobile = value.mobile;
        this.gender = value.gender;
        this.dob = value.dob;
        this.docName = value.docName;
        this.docMobile = value.docMobile;
        this.docEmail = value.docEmail;
        this.relation = value.relation;
        if (this.filename == undefined || this.firstname == null || this.filename == "") {
            this.userServices.updateFamilymember(this.member_id, value).subscribe(function (res) {
                console.log(res);
                if (res.message == "Member Information Updated successfull") {
                    _this.presentLoadingDefault();
                    _this.navCtrl.push('MyprofilePage');
                }
                else {
                    _this.presentLoadingDefault1();
                }
            });
        }
        else {
            this.uploadImage();
        }
    };
    EditmemberProfilePage.prototype.presentActionSheet = function () {
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
    EditmemberProfilePage.prototype.takePicture = function (sourceType) {
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
    EditmemberProfilePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            //alert(this.lastImage);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    EditmemberProfilePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    EditmemberProfilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        this.filename = newFileName;
        return newFileName;
    };
    EditmemberProfilePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    EditmemberProfilePage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = "http://webappsol.biz/WORKSPACE2/nursingondemand/webservice/update_family_members?";
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
                'member_id': this.member_id,
                'firstname': this.firstname,
                'lastname': this.lastname,
                'gender': this.gender,
                'date_of_birth': this.dob,
                'email': this.email,
                'phone_number': this.mobile,
                'doctor_email': this.docEmail,
                'doctor_phone_number': this.docMobile,
                'doctor_name': this.docName,
                'relation': this.relation
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
            _this.loading.dismissAll();
            _this.presentToast('Image successful uploaded.');
            _this.navCtrl.push('MyprofilePage');
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    EditmemberProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-editmember-profile',template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/editmember-profile/editmember-profile.html"*/'<!--\n  Generated template for the FamilyprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n        <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n              </button>\n    <ion-title>Family Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="edit-p">\n        <label>\n       <img src={{pathForImage(lastImage)?pathForImage(lastImage):profilePic}} (click)="presentActionSheet()">\n    \n        </label>\n      </div>\n\n     \n      <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n\n    <ion-row class="info-dada">\n      <h1>Person\'s Information </h1>\n\n      <div class="desin1">\n         \n        <div [ngClass]="{\'error-border\':!authForm.controls.firstname.valid && authForm.controls.firstname.touched}">\n            <input  type="text"  placeholder="First Name" formControlName ="firstname" [(ngModel)]="firstname" />\n        </div>\n        <div class="errorsText" *ngIf="authForm.controls.firstname.hasError(\'pattern\') && authForm.controls.firstname.touched">\n            <p class="eror">Invalid First Name</p>\n          </div>\n\n          <div [ngClass]="{\'error-border\':!authForm.controls.lastname.valid && authForm.controls.lastname.touched}">\n              <input  type="text"  placeholder="Last Name" formControlName ="lastname" [(ngModel)]="lastname" />\n          </div>\n          <div class="errorsText" *ngIf="authForm.controls.lastname.hasError(\'pattern\') && authForm.controls.lastname.touched">\n              <p class="eror">Invalid Last Name</p>\n            </div>\n\n            <div [ngClass]="{\'error-border\':!authForm.controls.relation.valid && authForm.controls.relation.touched}">\n                <input  type="text"  placeholder="Relation Name" formControlName ="relation" [(ngModel)]="relation" />\n            </div>\n            <div class="errorsText" *ngIf="authForm.controls.relation.hasError(\'pattern\') && authForm.controls.relation.touched">\n                <p class="eror">Invalid Relation Name</p>\n              </div>\n       \n        \n        \n\n\n        <ion-item style="margin-bottom:3px;" >\n            <ion-label>Gender</ion-label>\n            <ion-select (ionChange)="userGender(gender)" [(ngModel)]="gender" formControlName="gender">\n              <ion-option  value="female">Female</ion-option>\n              <ion-option value="male">Male</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n              <ion-label>Date of Birth</ion-label>\n              <ion-datetime  displayFormat="MM/DD/YYYY" [(ngModel)]="dob" formControlName="dob" ></ion-datetime>/ion-datetime>\n            </ion-item>\n\n          <div [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n              <input  type="text"  placeholder="Enter Email" formControlName ="email" [(ngModel)]="email"/>\n          </div>\n          <div class="errorsText" *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n              <p class="eror">Invalid Email</p>\n          </div>\n\n          <div [ngClass]="{\'error-border\':!authForm.controls.mobile.valid && authForm.controls.mobile.touched}">\n              <input  type="text"  placeholder="Enter Phone Number" formControlName ="mobile" [(ngModel)]="mobile" />\n          </div>\n\n\n          <div  *ngIf="authForm.controls.mobile.hasError(\'minlength\') || authForm.controls.mobile.hasError(\'maxlength\') || authForm.controls.mobile.hasError(\'pattern\')">\n              <p class="eror">Please Enter 10 Numbers only </p>\n          </div>\n\n\n      \n\n        </div>\n    </ion-row>\n\n\n    <ion-row class="info-dada">\n      <h1>Doctor\'s Information</h1>\n\n      <div class="desin1">\n\n          <div [ngClass]="{\'error-border\':!authForm.controls.docName.valid && authForm.controls.docName.touched}">\n              <input  type="text"  placeholder="Doctor Name" formControlName ="docName" [(ngModel)]="docName" />\n          </div>\n          <div class="errorsText" *ngIf="authForm.controls.docName.hasError(\'pattern\') && authForm.controls.docName.touched">\n              <p class="eror">Invalid Doctor Name</p>\n          </div>\n\n          <div [ngClass]="{\'error-border\':!authForm.controls.docEmail.valid && authForm.controls.docEmail.touched}">\n              <input  type="text"  placeholder="Doctor Email" formControlName ="docEmail" [(ngModel)]="docEmail" />\n          </div>\n          <div class="errorsText" *ngIf="authForm.controls.docEmail.hasError(\'pattern\') && authForm.controls.docEmail.touched">\n              <p class="eror">Invalid Doctor\'s Email</p>\n          </div>\n\n          <div [ngClass]="{\'error-border\':!authForm.controls.docMobile.valid && authForm.controls.docMobile.touched}">\n              <input  type="text"  placeholder="Enter Doctor\'s Number" formControlName ="docMobile" [(ngModel)]="docMobile" />\n          </div>\n\n\n          <div  *ngIf="authForm.controls.docMobile.hasError(\'minlength\') || authForm.controls.docMobile.hasError(\'maxlength\') || authForm.controls.docMobile.hasError(\'pattern\')">\n              <p class="eror">Please Enter 10 Numbers only </p>\n          </div>\n\n\n\n\n      </div>\n    </ion-row>\n\n    <button class="btn-login" ion-button [disabled]="!authForm.valid" >Update</button>\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/editmember-profile/editmember-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */]])
    ], EditmemberProfilePage);
    return EditmemberProfilePage;
}());

//# sourceMappingURL=editmember-profile.js.map

/***/ })

});
//# sourceMappingURL=44.js.map