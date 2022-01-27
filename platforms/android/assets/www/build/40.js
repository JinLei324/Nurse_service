webpackJsonp([40],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsPageModule", function() { return FaqsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faqs__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FaqsPageModule = /** @class */ (function () {
    function FaqsPageModule() {
    }
    FaqsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faqs__["a" /* FaqsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faqs__["a" /* FaqsPage */]),
            ],
        })
    ], FaqsPageModule);
    return FaqsPageModule;
}());

//# sourceMappingURL=faqs.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FaqdetailsPage } from '../faqdetails/faqdetails';
//import { ShareappwithfriendPage } from '../shareappwithfriend/shareappwithfriend';
//import { UnableloginPage } from '../unablelogin/unablelogin';

//import { NotreceivingemailPage } from '../notreceivingemail/notreceivingemail';
//import { LogoutfromnursingPage } from '../logoutfromnursing/logoutfromnursing';
//import { UpdateprofilePage } from '../updateprofile/updateprofile';
/**
 * Generated class for the FaqsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqsPage = /** @class */ (function () {
    function FaqsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    FaqsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqsPage');
    };
    FaqsPage.prototype.fqDetails = function () {
        var modal = this.modalCtrl.create('FaqdetailsPage');
        modal.present();
    };
    FaqsPage.prototype.shareApp = function () {
        var modal = this.modalCtrl.create('ShareappwithfriendPage');
        modal.present();
    };
    FaqsPage.prototype.unableLogin = function () {
        var modal = this.modalCtrl.create('UnableloginPage');
        modal.present();
    };
    FaqsPage.prototype.notreceiving = function () {
        var modal = this.modalCtrl.create('NotreceivingemailPage');
        modal.present();
    };
    FaqsPage.prototype.logoutfrom = function () {
        var modal = this.modalCtrl.create('LogoutfromnursingPage');
        modal.present();
    };
    FaqsPage.prototype.updateProfile = function () {
        console.log("maharajn ki njaik");
        var modal = this.modalCtrl.create('UpdateprofilePage');
        modal.present();
    };
    FaqsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-faqs',template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/faqs/faqs.html"*/'<!--\n  Generated template for the FaqsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n\n    <ion-title>FAQ\'s</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h5>Questions You May Have</h5>\n  <div style="text-align: center">\n    <button ion-button class="fq_btn" (click)="fqDetails()">How can i change my password?</button>\n    <button ion-button class="fq_btn" (click)="shareApp()">How can i share this app with my friends?</button>\n    <button ion-button class="fq_btn" (click)="unableLogin()">Unable to login</button>\n    <button ion-button class="fq_btn" (click)="notreceiving()">Not Receiving email to reset password</button>\n    <button ion-button class="fq_btn" (click)="logoutfrom()">How can i log out from Nursing on Demand app</button>\n    <button ion-button class="fq_btn" (click)="updateProfile()">How can i update my profile?</button>\n  </div>\n\n  <!-- <h5 style="margin-top:30px;">Popular Topics</h5> -->\n\n  <!-- <ion-slides slidesPerView="2" style="height: auto !important;" loop="true">\n    <ion-slide style="    border: 1px solid rgb(204, 204, 204);\n    border-radius: 10px;\n    width: 100%;\n    margin: 3px;\n    max-width: 158px;height: 160px;">\n      <img src="assets/imgs/user_login.png">\n      <span class="abt">About</span>\n      <p class="sat">Login & Password</p>\n    </ion-slide>\n    <ion-slide style=" border: 1px solid rgb(204, 204, 204);\n    border-radius: 10px;\n    width: 100%;\n    margin: 3px;\n    max-width: 158px;height: 160px;">\n      <img src="assets/imgs/user_settings.png">\n      <span class="abt">About</span>\n      <p class="sat">Profile Settings</p>\n    </ion-slide>\n    <ion-slide style="    border: 1px solid rgb(204, 204, 204);\n    border-radius: 10px;\n    width: 100%;\n    margin: 3px;\n    max-width: 158px;height: 160px;">\n      <img src="assets/imgs/user_login.png">\n      <span class="abt">About</span>\n      <p class="sat">Login & Password</p>\n    </ion-slide>\n    <ion-slide style=" border: 1px solid rgb(204, 204, 204);\n    border-radius: 10px;\n    width: 100%;\n    margin: 3px;\n    max-width: 158px;height: 160px;">\n      <img src="assets/imgs/user_settings.png">\n      <span class="abt">About</span>\n      <p class="sat">Profile Settings</p>\n    </ion-slide>\n  </ion-slides> -->\n\n\n</ion-content>'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/faqs/faqs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], FaqsPage);
    return FaqsPage;
}());

//# sourceMappingURL=faqs.js.map

/***/ })

});
//# sourceMappingURL=40.js.map