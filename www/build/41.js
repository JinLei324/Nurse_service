webpackJsonp([41],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqdetailsPageModule", function() { return FaqdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faqdetails__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FaqdetailsPageModule = /** @class */ (function () {
    function FaqdetailsPageModule() {
    }
    FaqdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faqdetails__["a" /* FaqdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faqdetails__["a" /* FaqdetailsPage */]),
            ],
        })
    ], FaqdetailsPageModule);
    return FaqdetailsPageModule;
}());

//# sourceMappingURL=faqdetails.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqdetailsPage; });
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
 * Generated class for the FaqdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FaqdetailsPage = /** @class */ (function () {
    function FaqdetailsPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FaqdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FaqdetailsPage');
    };
    FaqdetailsPage.prototype.dIsmss = function () {
        this.viewCtrl.dismiss();
    };
    FaqdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-faqdetails',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/faqdetails/faqdetails.html"*/'<!--\n  Generated template for the FaqdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>FAQ\'s</ion-title>\n    <div class="header-i">\n      <button (click)="dIsmss()"> <img src="assets/imgs/close.png"></button>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <div class="details">\n    <h1 class="heading">How do you change or reset your password?</h1>\n    <h6 class="heading">Change your password</h6>\n    <p class="content-d">To change your password on NursingonDemand app if you\'re already loggged in:</p>\n    <p class="content-d"> 1. Click Settings in the top right corner of home</p>\n    <p class="content-d">2. Click Update Password</p>\n    <p class="content-d">3. Edit Current Password and New Password what you want to change with</p>\n    <p class="content-d">4. Click Save Changes.</p>\n\n    <p class="content-d">If you\'re logged in but have forgotten your password, follow the steps under\n      Change your Password then click Forgot your password?</p>\n\n    <!-- <h6 class="heading">Reset your password</h6>\n    <p class="content-d">To reset your password on Nursing on Demand if you\'re already logged in:</p>\n    <p class="content-d">1. Goto the find your acount page.</p>\n    <p class="content-d">2. Type the email,mobile phone number,fullname or username associated\n      with your account,then click Search.</p>\n    <h6 class="heading">If you\'re still having trouble, we can help you recover your account.</h6>\n    <h6 class="heading">Was this information helpful?</h6> -->\n\n\n  </div>\n  <!-- <ion-list radio-group [(ngModel)]="relationship">\n    <ion-row style="background-color: #d7d7d7; border-radius: 10px; margin: 20px 0 40px 0;">\n      <ion-col col-6 style=" text-align: center; padding: 12px 0;">\n        <ion-radio value="friends" checked style="padding: 5px 0;margin-left: -7px;"></ion-radio>\n        <ion-label>Yes</ion-label>\n      </ion-col>\n\n      <ion-col col-6 style=" text-align: center; padding: 12px 0;">\n        <ion-radio value="family" style="padding: 5px 0;margin-left: -7px;"></ion-radio>\n        <ion-label>No</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-list> -->\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/faqdetails/faqdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], FaqdetailsPage);
    return FaqdetailsPage;
}());

//# sourceMappingURL=faqdetails.js.map

/***/ })

});
//# sourceMappingURL=41.js.map