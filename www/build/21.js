webpackJsonp([21],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareappPageModule", function() { return ShareappPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shareapp__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShareappPageModule = /** @class */ (function () {
    function ShareappPageModule() {
    }
    ShareappPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shareapp__["a" /* ShareappPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shareapp__["a" /* ShareappPage */]),
            ],
        })
    ], ShareappPageModule);
    return ShareappPageModule;
}());

//# sourceMappingURL=shareapp.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareappPage; });
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


//import { SettingsPage } from '../settings/settings';

/**
 * Generated class for the ShareappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShareappPage = /** @class */ (function () {
    function ShareappPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ShareappPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShareappPage');
    };
    ShareappPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ShareappPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shareapp',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/shareapp/shareapp.html"*/'<!--\n  Generated template for the ShareappPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>shareapp</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="bg">\n    <ion-icon ios="ios-close-circle" md="md-close-circle" class="close" (click)="close()"></ion-icon>\n<div class="social_icons">\n    <div class="social_icons1">\n        <ion-icon ios="logo-twitter" md="logo-twitter" class="twitter"></ion-icon>\n        <ion-icon ios="logo-googleplus" md="logo-googleplus" class="goggle"></ion-icon>\n        <ion-icon ios="logo-linkedin" md="logo-linkedin" class="linkdin"></ion-icon>\n      </div>\n      \n      <div class="social_icons2">\n        <ion-icon ios="logo-skype" md="logo-skype" class="sky"></ion-icon>\n        <ion-icon ios="logo-pinterest" md="logo-pinterest" class="pin"></ion-icon>\n        <ion-icon ios="logo-facebook" md="logo-facebook" class="face"></ion-icon>\n      </div>\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/shareapp/shareapp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ShareappPage);
    return ShareappPage;
}());

//# sourceMappingURL=shareapp.js.map

/***/ })

});
//# sourceMappingURL=21.js.map