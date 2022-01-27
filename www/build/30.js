webpackJsonp([30],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursingdemandmapPageModule", function() { return NursingdemandmapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nursingdemandmap__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NursingdemandmapPageModule = /** @class */ (function () {
    function NursingdemandmapPageModule() {
    }
    NursingdemandmapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nursingdemandmap__["a" /* NursingdemandmapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nursingdemandmap__["a" /* NursingdemandmapPage */]),
            ],
        })
    ], NursingdemandmapPageModule);
    return NursingdemandmapPageModule;
}());

//# sourceMappingURL=nursingdemandmap.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NursingdemandmapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sms__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { NursingselectPage } from '../nursingselect/nursingselect';




/**
 * Generated class for the NursingdemandmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NursingdemandmapPage = /** @class */ (function () {
    function NursingdemandmapPage(navCtrl, navParams, geolocation, callNumber, userService, loadingCtrl, sms) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.callNumber = callNumber;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.sms = sms;
        this.request_id = navParams.get('request_id');
        this.requestMessage = navParams.get('text');
        this.mobile = navParams.get('requestData');
        console.log("request ki id  ", this.request_id);
        this.displayGoogleMap();
    }
    NursingdemandmapPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NursingdemandmapPage');
    };
    NursingdemandmapPage.prototype.nursingSelect = function () {
        this.navCtrl.setRoot('NursingselectPage');
    };
    NursingdemandmapPage.prototype.call = function () {
        this.callNumber.callNumber(this.mobile, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    NursingdemandmapPage.prototype.displayGoogleMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            console.log(position.coords.latitude);
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            //   //let latLng = new google.maps.LatLng(-34.9290, 138.6010);
            var mapOptions = {
                center: latLng,
                zoom: 14,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapContainer.nativeElement, mapOptions);
            //this.getMarkers(this.nursesList);
            _this.addUserMarkersToMap(lat, long);
        }, function (err) {
            console.log(err);
        });
    };
    NursingdemandmapPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Successfully cancel this request'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    NursingdemandmapPage.prototype.presentLoadingDefault1 = function () {
        var loading = this.loadingCtrl.create({
            content: 'Failed to cancel this request'
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    NursingdemandmapPage.prototype.addUserMarkersToMap = function (lat, long) {
        //alert('hello')
        console.log(lat, long);
        var position = new google.maps.LatLng(lat, long);
        var museumMarker = new google.maps.Marker({ position: position, icon: { url: 'assets/icon/user_map.png' } });
        museumMarker.setMap(this.map);
    };
    NursingdemandmapPage.prototype.cancel = function () {
        var _this = this;
        this.userService.cancelRequest(this.request_id).subscribe(function (res) {
            console.log(res);
            if (res.result == "successfull") {
                _this.presentLoadingDefault();
                _this.navCtrl.setRoot('NursingselectPage');
            }
            else {
                _this.presentLoadingDefault1();
            }
        });
    };
    NursingdemandmapPage.prototype.message = function () {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // Opens Default sms app
                //intent: '' // Sends sms without opening default sms app
            }
        };
        this.sms.send(this.mobile, 'Dummy text', options)
            .then(function () {
            alert("success");
        }, function () {
            alert("failed");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], NursingdemandmapPage.prototype, "mapContainer", void 0);
    NursingdemandmapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-nursingdemandmap',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/nursingdemandmap/nursingdemandmap.html"*/'<!--\n  Generated template for the NursingdemandmapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title>Nursing On Demand</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <div class="content-des">\n      <h2>Rest easy, care is on its way.</h2>\n      <p *ngIf="mobile" class="msg">To discuss any issues before the care arrives please contact</p>\n      <h5 *ngIf="mobile"> <img src="assets/imgs/callmap.png"> <span>{{mobile}}</span></h5>\n      <p *ngIf="!mobile" class="msg">Please wait while our care person accept your request. You will be notified once our nurse accepts the request. You can also cancel the request by clicking on \'Cancel\' button.</p>\n    </div>\n  </ion-item>\n <ion-row *ngIf="mobile">\n   <ion-col col-12>\n       <p>{{requestMessage}}</p>\n   </ion-col>\n   <!-- <ion-col col-4>\n       <button full  class="callbgn"  (click)="nursingSelect()">Ok</button>\n   </ion-col> -->\n   <ion-col col-6>\n       <button full class="callbgn" (click)="call()">Call</button>\n   </ion-col>\n   <ion-col col-6>\n        <button  class="cancil" (click)="cancel()">Cancel</button>\n    </ion-col>\n   <!-- \n<ion-col col-3>\n\n  <button  class="okcall" (click)="message()">Message</button>\n</ion-col> -->\n </ion-row>\n <ion-row *ngIf="!mobile">\n  <!-- <ion-col>\n      <button full  class="callbgn"  (click)="nursingSelect()">Ok</button>\n  </ion-col> -->\n  <ion-col>\n      <button class="cancil" (click)="cancel()">Cancel</button>\n  </ion-col>\n</ion-row>\n <div #map class="map"></div> \n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/nursingdemandmap/nursingdemandmap.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_sms__["a" /* SMS */]])
    ], NursingdemandmapPage);
    return NursingdemandmapPage;
}());

//# sourceMappingURL=nursingdemandmap.js.map

/***/ })

});
//# sourceMappingURL=30.js.map