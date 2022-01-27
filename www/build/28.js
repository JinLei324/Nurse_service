webpackJsonp([28],{

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingplansPageModule", function() { return PricingplansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pricingplans__ = __webpack_require__(383);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PricingplansPageModule = /** @class */ (function () {
    function PricingplansPageModule() {
    }
    PricingplansPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pricingplans__["a" /* PricingplansPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pricingplans__["a" /* PricingplansPage */]),
            ],
        })
    ], PricingplansPageModule);
    return PricingplansPageModule;
}());

//# sourceMappingURL=pricingplans.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingplansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {PaymentMethodPage} from "../payment-method/payment-method";

//import {PaymentdetailPage} from "../paymentdetail/paymentdetail";
/**
 * Generated class for the PricingplansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PricingplansPage = /** @class */ (function () {
    function PricingplansPage(navCtrl, navParams, userServices, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServices = userServices;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.priceingList = [];
        this.hourlyplan = [];
        this.userServices.getAllpriceList().subscribe(function (res) {
            console.log(res);
            _this.priceingList = res.result;
            console.log(_this.priceingList);
        });
        this.userServices.getAllPriceListDaily().subscribe(function (res) {
            console.log(res);
            _this.hourlyplan = res.result;
        });
    }
    PricingplansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PricingplansPage');
    };
    PricingplansPage.prototype.buy = function (id, priceName) {
        console.log(id, priceName);
        this.navCtrl.setRoot('PaymentdetailPage', { 'price_name': priceName });
    };
    PricingplansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pricingplans',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/pricingplans/pricingplans.html"*/'<!--\n  Generated template for the PricingplansPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pricing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="price_box1" style="margin-top: 15px;" *ngFor="let price of priceingList">\n    <h2 class="pricing_heading">\n      {{price.plan_name}}\n    </h2>\n\n    <ul *ngFor="let detail of price.plan_detail">\n      <li class="list_para">{{detail.visits}} Visits per Month: {{detail.price | currency: \'USD\': true}} (includes {{detail.free_visits}} free\n        visits) </li>\n    </ul>\n\n    <!-- <button ion-button class="buy_btn" (click)="buy(price.id,price.plan_name)">Buy</button> -->\n  </div>\n\n  <div class="price_box1" style="margin-top: 15px;" *ngFor="let price of hourlyplan">\n    <h2 class="pricing_heading">\n      {{price.plan_name}}\n    </h2>\n\n    <ul *ngFor="let detail of price.pricing_details">\n      <li class="list_para">{{detail.type}} : {{detail.price | currency: \'USD\': true}} per Hour </li>\n    </ul>\n\n    <!-- <button ion-button class="buy_btn" (click)="buy(price.id,price.plan_name)">Buy</button> -->\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/pricingplans/pricingplans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], PricingplansPage);
    return PricingplansPage;
}());

//# sourceMappingURL=pricingplans.js.map

/***/ })

});
//# sourceMappingURL=28.js.map