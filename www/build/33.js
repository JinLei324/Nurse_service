webpackJsonp([33],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotreceivingemailPageModule", function() { return NotreceivingemailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notreceivingemail__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotreceivingemailPageModule = /** @class */ (function () {
    function NotreceivingemailPageModule() {
    }
    NotreceivingemailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notreceivingemail__["a" /* NotreceivingemailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notreceivingemail__["a" /* NotreceivingemailPage */]),
            ],
        })
    ], NotreceivingemailPageModule);
    return NotreceivingemailPageModule;
}());

//# sourceMappingURL=notreceivingemail.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotreceivingemailPage; });
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


/**
 * Generated class for the NotreceivingemailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotreceivingemailPage = /** @class */ (function () {
    function NotreceivingemailPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    NotreceivingemailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotreceivingemailPage');
    };
    NotreceivingemailPage.prototype.dIsmss = function () {
        this.viewCtrl.dismiss();
    };
    NotreceivingemailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notreceivingemail',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/notreceivingemail/notreceivingemail.html"*/'<!--\n  Generated template for the FaqdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n   \n    <ion-title>FAQ\'s</ion-title>\n    <div class="header-i">\n      <button (click)="dIsmss()"> <img src="assets/imgs/close.png"></button>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<div class="details">\n<h1 class="heading">Not Receiving Email to Reset Password</h1>\n\n<p class="ontent-d">If you requested a new password but didn\'t receive your password reset email:</p>\n<p class="ontent-d">Check the spam or junk mail folder in your email accounts linked to your Facebook account.</p>\n<p class="ontent-d">Try to reset your password again.</p>\n<p class="ontent-d">If you can\'t reset your password because you can\'t access the email or mobile phone number on your account, here are some things you can try:</p>\n<h6 class="heading">Password Reset Tips</h6>\n<p class="ontent-d">1. Try logging in with an alternate email or phone number</p>\n<p class="ontent-d">2. Try to recover your email account</p>\n<p class="ontent-d">3. Try troubleshooting your mobile phone number, or try Trusted Contacts</p>\n\n    <h6 class="heading">Was this information helpful?</h6>\n\n\n</div>\n<ion-list radio-group [(ngModel)]="relationship">\n<ion-row style="background-color: #d7d7d7;\nborder-radius: 10px;\nmargin: 20px 0 40px 0;">\n  <ion-col col-6  style=" text-align: center;     padding: 12px 0;">\n    \n    <ion-radio value="friends" checked style="    padding: 5px 0;margin-left: -7px;"></ion-radio>\n    <ion-label>Yes</ion-label>\n  </ion-col>\n  <ion-col col-6 style=" text-align: center;    padding: 12px 0;">\n    \n    <ion-radio value="family" style="    padding: 5px 0;margin-left: -7px;"></ion-radio>\n    <ion-label>No</ion-label>\n\n  </ion-col>\n</ion-row>\n</ion-list>\n  \n \n    \n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/notreceivingemail/notreceivingemail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], NotreceivingemailPage);
    return NotreceivingemailPage;
}());

//# sourceMappingURL=notreceivingemail.js.map

/***/ })

});
//# sourceMappingURL=33.js.map