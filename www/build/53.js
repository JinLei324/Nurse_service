webpackJsonp([53],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllservicePageModule", function() { return AllservicePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allservice__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllservicePageModule = /** @class */ (function () {
    function AllservicePageModule() {
    }
    AllservicePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__allservice__["a" /* AllservicePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__allservice__["a" /* AllservicePage */]),
            ],
        })
    ], AllservicePageModule);
    return AllservicePageModule;
}());

//# sourceMappingURL=allservice.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllservicePage; });
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
 * Generated class for the AllservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllservicePage = /** @class */ (function () {
    function AllservicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AllservicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AllservicePage');
    };
    AllservicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-allservice',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/allservice/allservice.html"*/'<!--\n  Generated template for the AllservicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>All Service</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="service-design">\n    <ul>\n      \n        <li>ADLs</li>\n        <li>Administering &amp; reconciliation of medications, wound care, and other treatment options</li>\n        <li>Alzheimer’s and Dementia (Care of )</li>\n        <li>Blood / glucose monitoring</li>\n        <li>Case Management</li>\n        <li>Collecting patient health histories</li>\n        <li>Consulting with nurse supervisors and physicians to determine best treatment plans for patients</li>\n        <li>Conducting research to improve patient outcomes and healthcare processes</li>\n        <li>Counseling patients and their families</li>\n        <li>Educating patients about treatment plans</li>\n        <li>Interpreting patient information and making decisions about necessary actions, where appropriate</li>\n        <li>Infusion therapy / monitoring / administering</li>\n        <li>Observing and recording patient behavior</li>\n        <li>Performing physical exams and diagnostic testsPost-op Recovery</li>\n        <li>Private Care In-Hospital</li>\n        <li>Travel nursing (airplane travel, train or other similar mode)</li>\n        <li>Vital signs / Weight Measurements</li>\n    </ul>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/allservice/allservice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AllservicePage);
    return AllservicePage;
}());

//# sourceMappingURL=allservice.js.map

/***/ })

});
//# sourceMappingURL=53.js.map