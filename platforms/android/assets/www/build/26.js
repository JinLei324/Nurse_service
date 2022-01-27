webpackJsonp([26],{

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduledrequestsPageModule", function() { return ScheduledrequestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scheduledrequests__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScheduledrequestsPageModule = /** @class */ (function () {
    function ScheduledrequestsPageModule() {
    }
    ScheduledrequestsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__scheduledrequests__["a" /* ScheduledrequestsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__scheduledrequests__["a" /* ScheduledrequestsPage */]),
            ],
        })
    ], ScheduledrequestsPageModule);
    return ScheduledrequestsPageModule;
}());

//# sourceMappingURL=scheduledrequests.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledrequestsPage; });
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
 * Generated class for the ScheduledrequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScheduledrequestsPage = /** @class */ (function () {
    function ScheduledrequestsPage(navCtrl, navParams, userService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.scheduleData = navParams.get('scheduleData');
        console.log(this.scheduleData);
    }
    ScheduledrequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScheduledrequestsPage');
    };
    ScheduledrequestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-scheduledrequests',template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/scheduledrequests/scheduledrequests.html"*/'<!--\n  Generated template for the ScheduledrequestsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>{{scheduleData.page_name}} Requests</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="other-deails">\n    <p>Other Details</p>\n  </div>\n\n  <ion-row>\n    <ion-col col-7>\n      <ul class="lis-heart">\n        <li><img style="margin-left: 3px;" src="assets/imgs/r1.png"> <span>Service Type</span></li>\n        <li><img style="margin-left: 3px;" src="assets/imgs/r2.png"> <span>NURSE ID</span></li>\n        <li><img style="margin-left: 3px;" src="assets/imgs/r3.png"> <span>Nurse category</span></li>\n  \n        <li><img style="margin-left: 3px;" src="assets/imgs/r5.png"> <span>Visit Charges</span></li>\n      </ul>\n    </ion-col>\n\n    <ion-col col-5 class="managr30">\n      <p>{{scheduleData.serviceType}}</p>\n      <p>{{scheduleData.nurse_id}}</p>\n      <p>{{scheduleData.nurseType}}</p>\n    \n      <p>$ {{scheduleData.visitCharge}}</p>\n    </ion-col>\n\n  </ion-row>\n\n  <div class="other-deails">\n    <p>Services</p>\n  </div>\n\n  <div class="service-design">\n    <ul>\n      <li *ngFor="let ser of scheduleData.services">{{ser}}</li>\n  \n    </ul>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/scheduledrequests/scheduledrequests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], ScheduledrequestsPage);
    return ScheduledrequestsPage;
}());

//# sourceMappingURL=scheduledrequests.js.map

/***/ })

});
//# sourceMappingURL=26.js.map