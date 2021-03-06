webpackJsonp([31],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursingcareservicesPageModule", function() { return NursingcareservicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nursingcareservices__ = __webpack_require__(378);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NursingcareservicesPageModule = /** @class */ (function () {
    function NursingcareservicesPageModule() {
    }
    NursingcareservicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nursingcareservices__["a" /* NursingcareservicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nursingcareservices__["a" /* NursingcareservicesPage */]),
            ],
        })
    ], NursingcareservicesPageModule);
    return NursingcareservicesPageModule;
}());

//# sourceMappingURL=nursingcareservices.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NursingcareservicesPage; });
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



/**
 * Generated class for the NursingcareservicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NursingcareservicesPage = /** @class */ (function () {
    function NursingcareservicesPage(navCtrl, navParams, userServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServices = userServices;
        this.service_id = navParams.get('service_id');
        console.log("service id", this.service_id);
        this.serviceTitle = navParams.get('servicetype');
        console.log(this.serviceTitle);
        this.userServices.services(this.service_id).subscribe(function (res) {
            _this.serveiceData = res.result;
            console.log(_this.serveiceData);
        });
    }
    NursingcareservicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NursingcareservicesPage');
    };
    NursingcareservicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-nursingcareservices',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/nursingcareservices/nursingcareservices.html"*/'<!--\n  Generated template for the NursingcareservicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n \n    <ion-title>{{serviceTitle}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ul >\n        <li *ngFor="let serv of serveiceData"> <span class="doti"></span>{{serv.service_name}}</li>    \n    </ul>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/nursingcareservices/nursingcareservices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], NursingcareservicesPage);
    return NursingcareservicesPage;
}());

//# sourceMappingURL=nursingcareservices.js.map

/***/ })

});
//# sourceMappingURL=31.js.map