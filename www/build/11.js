webpackJsonp([11],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeloginPageModule", function() { return WelcomeloginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcomelogin__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomeloginPageModule = /** @class */ (function () {
    function WelcomeloginPageModule() {
    }
    WelcomeloginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcomelogin__["a" /* WelcomeloginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcomelogin__["a" /* WelcomeloginPage */]),
            ],
        })
    ], WelcomeloginPageModule);
    return WelcomeloginPageModule;
}());

//# sourceMappingURL=welcomelogin.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeloginPage; });
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


//import {SignupPage} from "../signup/signup";
//import {LoginPage} from "../login/login";
/**
 * Generated class for the WelcomeloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomeloginPage = /** @class */ (function () {
    function WelcomeloginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WelcomeloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomeloginPage');
    };
    WelcomeloginPage.prototype.signUp = function () {
        this.navCtrl.push('SignupPage');
    };
    WelcomeloginPage.prototype.SignIn = function () {
        this.navCtrl.push('LoginPage');
    };
    WelcomeloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-welcomelogin',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/welcomelogin/welcomelogin.html"*/'\n<ion-content class="padding-amange">\n <img class="imglogo" src="assets/imgs/logo.png">\n<ion-row>\n  <p class="title-heading">We proudly service the towns and cities in Middlesex County, Massachusetts - including Boston, Cambridge and their surrounding communities </p>\n<p class="welcom1">Welcome to <strong style="color:#000;">Nursing on Demand</strong></p>\n  <p class="we2">We provide high-quality care the way you want, when you want and how you to receive it.</p>\n</ion-row>\n\n<ion-row padding>\n  <button class="btn-sign" ion-button full (click)=\'signUp()\' style="background-color: #458fd0;">Sign Up</button>\n  <button class="btn-sign" ion-button full (click)=\'SignIn()\' style="background-color: #458fd0;">Sign In</button>\n\n</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/welcomelogin/welcomelogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], WelcomeloginPage);
    return WelcomeloginPage;
}());

//# sourceMappingURL=welcomelogin.js.map

/***/ })

});
//# sourceMappingURL=11.js.map