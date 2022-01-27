webpackJsonp([49],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactus__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */]),
            ],
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());

//# sourceMappingURL=contactus.module.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
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




//import {TermsusePage} from "../termsuse/termsuse";
//import {ServicesPage} from "../services/services";
/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = /** @class */ (function () {
    function ContactusPage(navCtrl, navParams, formBuilder, userServices, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userServices = userServices;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user_id = localStorage.getItem('user_id');
        console.log(this.user_id);
        this.authForm = formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[A-Za-z ]{1,32}')])],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])],
        });
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'plesae fill all value'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    ContactusPage.prototype.presentLoadingDefault1 = function () {
        var loading = this.loadingCtrl.create({
            content: 'Successfully send message'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    ContactusPage.prototype.presentLoadingDefault2 = function () {
        var loading = this.loadingCtrl.create({
            content: 'Message failed'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    ContactusPage.prototype.onSubmit = function (value) {
        var _this = this;
        console.log(value);
        if (value.name == "" || value.message == "" || value.email == "" || value.name == undefined || value.message == undefined || value.email == undefined) {
            this.presentLoadingDefault();
        }
        else {
            this.userServices.contactUs(value, this.user_id).subscribe(function (res) {
                if (res.message == "successfull") {
                    _this.presentLoadingDefault1();
                }
                else {
                    _this.presentLoadingDefault2();
                }
            });
        }
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/contactus/contactus.html"*/'<!--\n  Generated template for the ContactusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <ion-title>Contact us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <p class="heading">Ready to receive quality care- where, when and how you want it? Then we are just what you have been looking for!</p>\n\n    <div >\n      <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n   \n      <div [ngClass]="{\'error-border\':!authForm.controls.name.valid && authForm.controls.name.touched}">\n        <input  type="text"    placeholder="Name" formControlName="name" />\n      </div>\n      <div *ngIf="authForm.controls.name.hasError(\'required\') && authForm.controls.name.touched">\n        <p class="com">Enter Name</p>\n      </div>\n      <div *ngIf="authForm.controls.name.hasError(\'pattern\') && authForm.controls.name.touched">\n        <p class="com">Invalid Name</p>\n      </div>\n\n      <div [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n        <input type="email"  placeholder="Email Adress"  formControlName="email"/>\n      </div>\n      <div *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n        <p class="com">Enter Email</p>\n      </div>\n      <div *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n        <p class="com">Invalid Email</p>\n      </div>\n       \n      \n\n\n      <div [ngClass]="{\'error-border\':!authForm.controls.message.valid && authForm.controls.message.touched}">\n           <textarea  placeholder="Message" formControlName="message"></textarea>\n      </div>\n      <div *ngIf="authForm.controls.message.hasError(\'required\') && authForm.controls.message.touched">\n        <p class="com">Enter Message</p>\n      </div>\n       \n   \n\n\n      <button  class="btn-login" ion-button full>Send</button>\n      </form>\n\n\n      <h3>Roula Kerin, RN, <span style="font-size: 14px; font-weight: 300">CEO</span> <br> Nursing On Demand</h3>\n      <p class="call"><img src="assets/imgs/telephone.png" style="width: 20px;position: absolute;left: 30%;"> (617)592-9195 </p>\n\n      <div class="links">\n      <a href="#">www.nursing-on-demand.com</a>\n      </div>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/contactus/contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ })

});
//# sourceMappingURL=49.js.map