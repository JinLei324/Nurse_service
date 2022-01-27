webpackJsonp([51],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancellationPolicyPageModule", function() { return CancellationPolicyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancellation_policy__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CancellationPolicyPageModule = /** @class */ (function () {
    function CancellationPolicyPageModule() {
    }
    CancellationPolicyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cancellation_policy__["a" /* CancellationPolicyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancellation_policy__["a" /* CancellationPolicyPage */]),
            ],
        })
    ], CancellationPolicyPageModule);
    return CancellationPolicyPageModule;
}());

//# sourceMappingURL=cancellation-policy.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancellationPolicyPage; });
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
 * Generated class for the CancellationPolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CancellationPolicyPage = /** @class */ (function () {
    function CancellationPolicyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CancellationPolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CancellationPolicyPage');
    };
    CancellationPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cancellation-policy',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/cancellation-policy/cancellation-policy.html"*/'<!--\n  Generated template for the CancellationPolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <ion-title>Cancellation Policy</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <h3>Cancellation fees are charges to compensate our staff for time invested in traveling to a client’s care location.  Our cancellation fees are the following: </h3>\n\n    <p>If you have a scheduled visit and you cancel within an hour prior to the visit you will receive a full refund.</p>\n    <p>If you schedule an on-demand visit and you cancel within 2 minutes of placing your request, you will receive a full refund.</p>\n    <p>If you have a scheduled visit and you cancel within 30 minutes of your visit, you will receive a credit of half of the rate charge.</p>\n    <p>If you schedule an on-demand visit and you do not cancel your appointment within the 2 minutes cancelation window, you will be charged a full appointment fee.</p>\n    \n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/cancellation-policy/cancellation-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CancellationPolicyPage);
    return CancellationPolicyPage;
}());

//# sourceMappingURL=cancellation-policy.js.map

/***/ })

});
//# sourceMappingURL=51.js.map