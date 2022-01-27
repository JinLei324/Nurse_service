webpackJsonp([15],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnableloginPageModule", function() { return UnableloginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__unablelogin__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UnableloginPageModule = /** @class */ (function () {
    function UnableloginPageModule() {
    }
    UnableloginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__unablelogin__["a" /* UnableloginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__unablelogin__["a" /* UnableloginPage */]),
            ],
        })
    ], UnableloginPageModule);
    return UnableloginPageModule;
}());

//# sourceMappingURL=unablelogin.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnableloginPage; });
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
 * Generated class for the UnableloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnableloginPage = /** @class */ (function () {
    function UnableloginPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    UnableloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnableloginPage');
    };
    UnableloginPage.prototype.dIsmss = function () {
        this.viewCtrl.dismiss();
    };
    UnableloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-unablelogin',template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/unablelogin/unablelogin.html"*/'<!--\n  Generated template for the FaqdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  \n    <ion-title>FAQ\'s</ion-title>\n    <div class="header-i">\n      <button (click)="dIsmss()"> <img src="assets/imgs/close.png"></button>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<div class="details">\n<h1 class="heading">Unable To Login</h1>\n\n<p class="content-d">If you\'re having trouble logging into your Nursing on Demand account, here are some things you can try.</p>\n<h1 class="heading">Try recovering your Nursing on Demand account</h1>\n<p class="content-d">Go to Nursingondemand.support.com and follow the instructions. Make sure to use a computer or mobile phone that you have previously used to log into your Nursing-on-Demand account.</p>\n<h1 style="font-size: 16px;\ncolor: #524d4d;">If your password isn\'t working or you don\'t remember your password:</h1>\n<p class="content-d">If you\'re logged in to Nursing on Demand and know your password:</p>\n<p class="content-d">1. Click Sidemenu  in the top right corner of home</p>\n<p class="content-d">2. Click settings in the SideMenu bottom corner</p>\n<p class="content-d">3. Click Update Password Nursing on Demand </p>\n<p class="content-d">4. Click Save Changes.</p>\n</div>\n<h6 class="heading">Was this information helpful?</h6>\n<ion-list radio-group [(ngModel)]="relationship">\n<ion-row style="background-color: #d7d7d7;\nborder-radius: 10px;\nmargin: 20px 0 40px 0;">\n  <ion-col col-6  style=" text-align: center;     padding: 12px 0;">\n    \n    <ion-radio value="friends" checked style="    padding: 5px 0;margin-left: -7px;"></ion-radio>\n    <ion-label>Yes</ion-label>\n  </ion-col>\n  <ion-col col-6 style=" text-align: center;    padding: 12px 0;">\n    \n    <ion-radio value="family" style="    padding: 5px 0;margin-left: -7px;"></ion-radio>\n    <ion-label>No</ion-label>\n\n  </ion-col>\n</ion-row>\n</ion-list>\n  \n \n    \n\n\n</ion-content>\n'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/unablelogin/unablelogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], UnableloginPage);
    return UnableloginPage;
}());

//# sourceMappingURL=unablelogin.js.map

/***/ })

});
//# sourceMappingURL=15.js.map