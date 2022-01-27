webpackJsonp([32],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NursingPersonalPageModule", function() { return NursingPersonalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nursing_personal__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NursingPersonalPageModule = /** @class */ (function () {
    function NursingPersonalPageModule() {
    }
    NursingPersonalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nursing_personal__["a" /* NursingPersonalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nursing_personal__["a" /* NursingPersonalPage */]),
            ],
        })
    ], NursingPersonalPageModule);
    return NursingPersonalPageModule;
}());

//# sourceMappingURL=nursing-personal.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NursingPersonalPage; });
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
 * Generated class for the NursingPersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NursingPersonalPage = /** @class */ (function () {
    function NursingPersonalPage(navCtrl, navParams, userServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServices = userServices;
        this.current = "current";
        this.nurseId = 1;
        this.personalId = 2;
        this.userServices.servicesType().subscribe(function (res) {
            _this.servicetype = res.result;
            _this.nursingTitle = _this.servicetype[0].service_type;
            _this.personalTitle = _this.servicetype[1].service_type;
            console.log(_this.nursingTitle, _this.personalTitle);
        });
        this.userServices.services(this.nurseId).subscribe(function (res) {
            _this.nurseData = res.result;
            console.log(_this.nurseData);
        });
        this.userServices.services(this.personalId).subscribe(function (res) {
            _this.personalData = res.result;
        });
        console.log(this.nurseId, this.personalId);
    }
    NursingPersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NursingPersonalPage');
        this.current = 'current';
    };
    NursingPersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-nursing-personal',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/nursing-personal/nursing-personal.html"*/'<!--\n  Generated template for the NursingPersonalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Services</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div>\n    <ion-segment [(ngModel)]="current" >\n      <ion-segment-button value="current">\n        {{nursingTitle}}\n      </ion-segment-button>\n      <ion-segment-button value="personal">\n          {{personalTitle}}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="current">\n\n    <ion-list *ngSwitchCase="\'current\'">\n\n      <div class="service-design">\n        <ul>\n          <li *ngFor="let nurse of nurseData">{{nurse.service_name}}</li>\n          \n        </ul>\n      </div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'personal\'">\n      <div class="service-design">\n        <ul>\n            <li *ngFor="let per of personalData">{{per.service_name}}</li>\n           \n          </ul>\n\n      </div>\n    </ion-list>\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/nursing-personal/nursing-personal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], NursingPersonalPage);
    return NursingPersonalPage;
}());

//# sourceMappingURL=nursing-personal.js.map

/***/ })

});
//# sourceMappingURL=32.js.map