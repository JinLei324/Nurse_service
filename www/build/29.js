webpackJsonp([29],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursingselectPageModule", function() { return NursingselectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nursingselect__ = __webpack_require__(379);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NursingselectPageModule = /** @class */ (function () {
    function NursingselectPageModule() {
    }
    NursingselectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nursingselect__["a" /* NursingselectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nursingselect__["a" /* NursingselectPage */]),
            ],
        })
    ], NursingselectPageModule);
    return NursingselectPageModule;
}());

//# sourceMappingURL=nursingselect.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NursingselectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { NeedscarePage } from "../needscare/needscare";

//import { SchedulevisitPage } from '../schedulevisit/schedulevisit';

/**
 * Generated class for the NursingselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NursingselectPage = /** @class */ (function () {
    function NursingselectPage(navCtrl, navParams, userServices, alertCtrl, loadingCtrl, events, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServices = userServices;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.geolocation = geolocation;
        this.requestData = [];
        this.user_id = localStorage.getItem('user_id');
        console.log("user id", this.user_id);
        this.userServices.getprofile(this.user_id).subscribe(function (res) {
            console.log(res);
            if (res.status != 0) {
                _this.userPic = res.result.image;
                _this.userName = res.result.firstname + " " + res.result.lastname;
                localStorage.setItem('user_mobile', res.result.phone_number);
                localStorage.setItem('user_address', res.result.address);
                _this.events.publish('userPic', _this.userPic);
                _this.events.publish('name', _this.userName);
            }
        });
        this.showLoading();
        this.userServices.getvisit_list().subscribe(function (dataList) {
            _this.loading.dismiss();
            _this.scheduleList = dataList.result;
        });
    }
    NursingselectPage.prototype.load = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.lat = position.coords.latitude;
            _this.lon = position.coords.longitude;
            console.log("lat long mere on nursing demand", _this.lat, _this.lon);
            localStorage.setItem('lati', _this.lat);
            localStorage.setItem('loni', _this.lon);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        }, function (err) {
            console.log(err);
        });
    };
    NursingselectPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.user_id = localStorage.getItem('user_id');
        this.userServices.get_current_request(this.user_id).subscribe(function (res) {
            console.log(res);
            if (res.message == "successfull") {
                _this.navCtrl.setRoot('NursingdemandmapPage', {
                    "requestData": res.result.phone_number, "request_id": res.result.id,
                    "text": res.result.firstname + ' ' + res.result.lastname + ' is the nurse who will be visiting with you. Thank you.'
                });
            }
        });
    };
    NursingselectPage.prototype.ionViewDidLoad = function () {
        this.load();
        console.log('ionViewDidLoad NursingselectPage');
    };
    NursingselectPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'please select visit time'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    NursingselectPage.prototype.presentLoadingDefault1 = function () {
        var loading = this.loadingCtrl.create({
            content: 'please wait..'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    NursingselectPage.prototype.selectSchedule = function (visit_id, visit_name) {
        this.requestData['visit_id'] = visit_id;
        this.visitName = visit_name;
        console.log("visite  id", this.requestData, visit_name);
    };
    NursingselectPage.prototype.selectNext = function () {
        if (this.requestData.visit_id == undefined) {
            this.presentLoadingDefault();
        }
        else if (this.visitName == "Schedule Visit") {
            this.presentLoadingDefault1();
            this.navCtrl.setRoot('SchedulevisitPage', { 'requestdata': this.requestData });
        }
        else {
            this.requestData['visit_date'] = "";
            this.requestData['visit_time'] = "";
            this.navCtrl.setRoot('NeedscarePage', { 'requestData': this.requestData });
        }
    };
    NursingselectPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    NursingselectPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NursingselectPage.prototype, "mapElement", void 0);
    NursingselectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-nursingselect',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/nursingselect/nursingselect.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Nursing on Demand</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n <div class="onddemand">\n  <h3 style="text-align: center">What time would you like your visit?</h3>\n   \n </div>\n\n\n\n \n\n<div class="radio-design">\n    <ion-list radio-group>\n        <ion-item *ngFor="let visit of scheduleList">\n            <ion-label>{{visit.type}}</ion-label>\n            <ion-radio value="{{visit.id}}" (ionSelect)="selectSchedule(visit.id,visit.type)"></ion-radio>\n        </ion-item>\n    </ion-list>\n</div>\n\n  <button ion-button full class="btn-next" (click)="selectNext()" style="background-color: #458fd0">Next</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/nursingselect/nursingselect.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], NursingselectPage);
    return NursingselectPage;
}());

//# sourceMappingURL=nursingselect.js.map

/***/ })

});
//# sourceMappingURL=29.js.map