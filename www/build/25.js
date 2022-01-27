webpackJsonp([25],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulevisitPageModule", function() { return SchedulevisitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedulevisit__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchedulevisitPageModule = /** @class */ (function () {
    function SchedulevisitPageModule() {
    }
    SchedulevisitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__schedulevisit__["a" /* SchedulevisitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__schedulevisit__["a" /* SchedulevisitPage */]),
            ],
        })
    ], SchedulevisitPageModule);
    return SchedulevisitPageModule;
}());

//# sourceMappingURL=schedulevisit.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulevisitPage; });
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


//import { NeedscarePage } from '../needscare/needscare';
/**
 * Generated class for the SchedulevisitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulevisitPage = /** @class */ (function () {
    function SchedulevisitPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.requestData = [];
        this.dt = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString();
        this.requestData = navParams.get('requestdata');
        console.log("request data", this.requestData);
    }
    SchedulevisitPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please select date and time'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    SchedulevisitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulevisitPage');
    };
    SchedulevisitPage.prototype.Nextcare = function (dt, tim) {
        console.log(dt, tim);
        this.requestData['visit_date'] = dt;
        this.requestData['visit_time'] = tim;
        if (this.requestData.visit_date == undefined || this.requestData.visit_time == undefined) {
            this.presentLoadingDefault();
        }
        else {
            console.log(this.requestData);
            this.navCtrl.setRoot('NeedscarePage', { 'requestData': this.requestData });
        }
    };
    SchedulevisitPage.prototype.getTomorrowDate = function () {
        var today = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        return today.getFullYear() + "-" + (today.getMonth() <= 9 ? ("0" + today.getMonth()) : today.getMonth()) + "-" + (today.getDate() <= 9 ? ("0" + today.getDate()) : today.getDate());
    };
    SchedulevisitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-schedulevisit',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/schedulevisit/schedulevisit.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Nursing On Demand</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <div class="onddemand">\n      <h3 style="text-align: center">What time would you like your visit?</h3>\n      \n    </div>\n\n\n\n  <ion-item>\n    <ion-label>Select Date</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [min]="getTomorrowDate()" max="2099-10-31" placeholder="MM/DD/YYYY" [(ngModel)]="dt"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Select Time</ion-label>\n    <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" placeholder="HH:MM:PM/AM" [(ngModel)]="tim"></ion-datetime>\n  </ion-item>\n\n  <button ion-button full class="btn-next" (click)="Nextcare(dt,tim)" style="background-color: #458fd0">Next</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/schedulevisit/schedulevisit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], SchedulevisitPage);
    return SchedulevisitPage;
}());

//# sourceMappingURL=schedulevisit.js.map

/***/ })

});
//# sourceMappingURL=25.js.map