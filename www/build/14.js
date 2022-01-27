webpackJsonp([14],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordPageModule", function() { return UpdatePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_password__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatePasswordPageModule = /** @class */ (function () {
    function UpdatePasswordPageModule() {
    }
    UpdatePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_password__["a" /* UpdatePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_password__["a" /* UpdatePasswordPage */]),
            ],
        })
    ], UpdatePasswordPageModule);
    return UpdatePasswordPageModule;
}());

//# sourceMappingURL=update-password.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { LoginPage } from '../login/login';
/**
 * Generated class for the UpdatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatePasswordPage = /** @class */ (function () {
    function UpdatePasswordPage(navCtrl, navParams, formBuilder, userServices, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userServices = userServices;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authForm = formBuilder.group({
            oldpwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            newpwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
            cnfpwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)])],
        });
        this.user_id = localStorage.getItem('user_id');
    }
    UpdatePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpdatePasswordPage');
    };
    UpdatePasswordPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please fill All fields..'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    UpdatePasswordPage.prototype.presentLoadingDefault1 = function () {
        var loading = this.loadingCtrl.create({
            content: 'Password does not match..'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    UpdatePasswordPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            subTitle: 'Password successfully update',
            buttons: ['ok']
        });
        alert.present();
    };
    UpdatePasswordPage.prototype.presentAlert1 = function () {
        var alert = this.alertCtrl.create({
            subTitle: 'Updation Failed',
            buttons: ['ok']
        });
        alert.present();
    };
    UpdatePasswordPage.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.authForm.valid) {
            console.log(value);
            if (value.newpwd == value.cnfpwd) {
                this.userServices.updatePassword(this.user_id, value).subscribe(function (res) {
                    console.log(res);
                    if (res.result == "successfull") {
                        _this.navCtrl.setRoot('LoginPage');
                        _this.presentAlert();
                    }
                    else {
                        _this.presentAlert1();
                    }
                });
            }
            else {
                this.presentLoadingDefault1();
            }
        }
        else {
            this.presentLoadingDefault();
        }
    };
    UpdatePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-update-password',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/update-password/update-password.html"*/'<!--\n  Generated template for the UpdatePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      \n    <ion-title>Update Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<p>It\'s a good idea to use a strong password that you don\'t use elsewhere</p>\n  \n    <div class="desin1">\n        <form [formGroup]="authForm" >\n            <div *ngIf="authForm.controls.oldpwd.hasError(\'required\') && authForm.controls.oldpwd.touched">\n                <p class="com">Password Required</p>\n            </div>\n\n              <div *ngIf="authForm.controls.oldpwd.hasError(\'minlength\') && authForm.controls.oldpwd.touched">\n                  <p class="com">Minimum Password length is 6!</p>\n              </div>\n            <div [ngClass]="{\'error-border\':!authForm.controls.oldpwd.valid && authForm.controls.oldpwd.touched}">\n                <ion-input placeholder="Current  password" type="password" formControlName="oldpwd"></ion-input>\n            </div>\n      \n        <div *ngIf="authForm.controls.newpwd.hasError(\'required\') && authForm.controls.newpwd.touched">\n            <p class="com">Password Required</p>\n        </div>\n          <div *ngIf="authForm.controls.newpwd.hasError(\'minlength\') && authForm.controls.newpwd.touched">\n              <p class="com">Minimum Password length is 6!</p>\n          </div>\n          <div [ngClass]="{\'error-border\':!authForm.controls.newpwd.valid && authForm.controls.newpwd.touched}">\n              <ion-input placeholder="New password" type="password" formControlName="newpwd"></ion-input>\n          </div>\n     \n      <div *ngIf="authForm.controls.cnfpwd.hasError(\'required\') && authForm.controls.cnfpwd.touched">\n          <p class="com">Password Required</p>\n      </div>\n        <div *ngIf="authForm.controls.cnfpwd.hasError(\'minlength\') && authForm.controls.cnfpwd.touched">\n            <p class="com">Minimum Password length is 6!</p>\n        </div>\n        <div [ngClass]="{\'error-border\':!authForm.controls.cnfpwd.valid && authForm.controls.cnfpwd.touched}">\n            <ion-input placeholder="Re-Enter new password" type="password" formControlName="cnfpwd"></ion-input>\n        </div>\n\n      <button class="btn-login" ion-button full  (click)="onSubmit(authForm.value)" type="submit" >Save Changes</button>\n</form>\n    </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/update-password/update-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], UpdatePasswordPage);
    return UpdatePasswordPage;
}());

//# sourceMappingURL=update-password.js.map

/***/ })

});
//# sourceMappingURL=14.js.map