webpackJsonp([17],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsusePageModule", function() { return TermsusePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__termsuse__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsusePageModule = /** @class */ (function () {
    function TermsusePageModule() {
    }
    TermsusePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__termsuse__["a" /* TermsusePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__termsuse__["a" /* TermsusePage */]),
            ],
        })
    ], TermsusePageModule);
    return TermsusePageModule;
}());

//# sourceMappingURL=termsuse.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsusePage; });
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


var TermsusePage = /** @class */ (function () {
    function TermsusePage(navCtrl, navParams, platform, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
    }
    TermsusePage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please Accept Terms and Condition'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    TermsusePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsusePage');
    };
    TermsusePage.prototype.nursingSlide = function () {
        if (this.check == false || this.check == null) {
            this.presentLoadingDefault();
        }
        else {
            this.navCtrl.setRoot('NursingselectPage');
        }
    };
    TermsusePage.prototype.launch = function () {
        this.navCtrl.push('TermsconditionPage');
    };
    TermsusePage.prototype.privacy = function () {
        this.navCtrl.push('PrivacypolicyPage');
    };
    TermsusePage.prototype.notify = function (value) {
        console.log(value);
        this.check = value;
    };
    TermsusePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-termsuse',template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/termsuse/termsuse.html"*/'\n<ion-content class="padding-amange">\n  <img class="imglogo" src="assets/imgs/logo.png">\n  <ion-row padding>\n    <p class="title-heading">We are a boutique concierge nursing service that provides on-demand skilled nursing care to our clients in the comfort of their homes, place of work or any location where you and/or your loved ones need the care of a Nurse Practitioner, Physician Assistant, Registered Nurse, Nursing Assistant or Caregiver.</p>\n    <p class="welcom1">We believe in a personal touch. We are private owned and operated local business.</p>\n    <p class="we2">Concierge nursing provides a flexible approach to receiving healthcare.</p>\n    <p class="we2">We are private pay – no need to work through the hassles of your insurance company..</p>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="check" (ionChange)="notify(check)"></ion-toggle>\n      <ion-label> I Agree to <span style="color: #c11f2c; cursor: pointer;" (click)="launch()"> Terms of Use </span> and  <span  style="color: #62b773; cursor: pointer;" (click)="privacy()">Privacy Policy</span>  </ion-label>\n    </ion-item>\n\n  </ion-row>\n\n  <ion-row padding>\n    <button class="btn-sign" ion-button full (click)=\'nursingSlide()\' style="background-color: #458fd0;">How can we help you</button>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/termsuse/termsuse.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], TermsusePage);
    return TermsusePage;
}());

//# sourceMappingURL=termsuse.js.map

/***/ })

});
//# sourceMappingURL=17.js.map