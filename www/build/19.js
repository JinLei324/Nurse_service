webpackJsonp([19],{

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierPageModule", function() { return SupplierPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supplier__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupplierPageModule = /** @class */ (function () {
    function SupplierPageModule() {
    }
    SupplierPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__supplier__["a" /* SupplierPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supplier__["a" /* SupplierPage */]),
            ],
        })
    ], SupplierPageModule);
    return SupplierPageModule;
}());

//# sourceMappingURL=supplier.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierPage; });
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


var SupplierPage = /** @class */ (function () {
    function SupplierPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
    }
    SupplierPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupplierPage');
    };
    SupplierPage.prototype.goTocvs = function (url) {
        this.platform.ready().then(function () {
            cordova.InAppBrowser.open(url, "_system", "location=true");
        });
    };
    SupplierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-supplier',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/supplier/supplier.html"*/'<!--\n  Generated template for the SupplierPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Add Supplier</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <!--<div>-->\n   <!--<button class="btn_green" (click)="goTocvs(\'https://www.walgreens.com/\')">Go  to CVS &nbsp;&nbsp;<ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon></button>-->\n <!--</div>-->\n <!--<div>-->\n  <!--<button class="btn_leechi" (click)="goTocvs(\'https://www.walgreens.com/\')">Go to Rite Aid &nbsp;&nbsp;<ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon></button>-->\n<!--</div>-->\n<!--<div>-->\n  <!--<button class="btn_sky" (click)="goTocvs(\'https://www.walgreens.com/\')">Go to Walgreens &nbsp;&nbsp;<ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon></button>-->\n<!--</div>-->\n\n    <div class="paddingss">\n\n     <div class="box-dsss">\n     <img src="assets/imgs/p1.png">\n         <button class="btn">CVS</button>\n     </div>\n\n        <div class="box-dsss">\n            <img src="assets/imgs/p2.png">\n            <button class="btn">CVS</button>\n        </div>\n\n        <div class="box-dsss">\n            <img src="assets/imgs/p3.png">\n            <button class="btn">CVS</button>\n        </div>\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/supplier/supplier.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], SupplierPage);
    return SupplierPage;
}());

//# sourceMappingURL=supplier.js.map

/***/ })

});
//# sourceMappingURL=19.js.map