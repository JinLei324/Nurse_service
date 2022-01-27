webpackJsonp([20],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareappwithfriendPageModule", function() { return ShareappwithfriendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shareappwithfriend__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShareappwithfriendPageModule = /** @class */ (function () {
    function ShareappwithfriendPageModule() {
    }
    ShareappwithfriendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shareappwithfriend__["a" /* ShareappwithfriendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shareappwithfriend__["a" /* ShareappwithfriendPage */]),
            ],
        })
    ], ShareappwithfriendPageModule);
    return ShareappwithfriendPageModule;
}());

//# sourceMappingURL=shareappwithfriend.module.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareappwithfriendPage; });
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
 * Generated class for the ShareappwithfriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShareappwithfriendPage = /** @class */ (function () {
    function ShareappwithfriendPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ShareappwithfriendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShareappwithfriendPage');
    };
    ShareappwithfriendPage.prototype.dIsmss = function () {
        this.viewCtrl.dismiss();
    };
    ShareappwithfriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-shareappwithfriend',template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/shareappwithfriend/shareappwithfriend.html"*/'<!--\n  Generated template for the FaqdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <ion-title>FAQ\'s</ion-title>\n    <div class="header-i">\n      <button (click)="dIsmss()"> <img src="assets/imgs/close.png"></button>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<div class="details">\n<h1 class="heading">How Can I Share This App With My Friends</h1>\n<h6 class="heading">Share App With Friends</h6>\n<p class="content-d">To Share App With Friends if you\'re already loggged in:</p>\n<p class="content-d">1. Click Sidemenu in the top right corner of home</p>\n<p class="content-d">2. Click Settings Nursing on Demand </p>\n<p class="content-d">3. Click Share Nursing on Demand</p>\n<p class="content-d">4. Choose Any social media(As Facebook,Twitter,Linkdin,Gmail etc..)</p>\n\n\n\n\n</div>\n<ion-list radio-group [(ngModel)]="relationship">\n<ion-row style="background-color: #d7d7d7;\nborder-radius: 10px;\nmargin: 20px 0 40px 0;">\n  <ion-col col-6  style=" text-align: center;     padding: 12px 0;">\n    \n    <ion-radio value="friends" checked style="    padding: 5px 0;margin-left: -7px;"></ion-radio>\n    <ion-label>Yes</ion-label>\n  </ion-col>\n  <ion-col col-6 style=" text-align: center;    padding: 12px 0;">\n    \n    <ion-radio value="family" style="    padding: 5px 0;margin-left: -7px;"></ion-radio>\n    <ion-label>No</ion-label>\n\n  </ion-col>\n</ion-row>\n</ion-list>\n  \n \n    \n\n\n</ion-content>\n'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/shareappwithfriend/shareappwithfriend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ShareappwithfriendPage);
    return ShareappwithfriendPage;
}());

//# sourceMappingURL=shareappwithfriend.js.map

/***/ })

});
//# sourceMappingURL=20.js.map