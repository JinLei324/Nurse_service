webpackJsonp([34],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/notification/notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n     \n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n    <ion-row class="bg_b">\n        <ion-col col-4>\n            <img src="assets/imgs/notifa.png">\n        </ion-col>\n        <ion-col col-8>\n            <h5 class="title_h5">Nursing on Demand</h5>\n            <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce et metus.Lorem ... <a style="color: #666;font-size: 14px; font-weight: 400; cursor: pointer;">See More</a></p>\n            <span class="dt">Jan 28 at 10:45 pm</span>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="bg_b">\n        <ion-col col-4>\n            <img src="assets/imgs/notifa.png">\n        </ion-col>\n        <ion-col col-8>\n            <h5 class="title_h5">Nursing on Demand</h5>\n            <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce et metus.Lorem ... <a style="color: #666;font-size: 14px; font-weight: 400; cursor: pointer;">See More</a></p>\n            <span class="dt">Jan 26 at 10:00 pm</span>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="bg_b">\n        <ion-col col-4>\n            <img src="assets/imgs/notifa.png">\n        </ion-col>\n        <ion-col col-8>\n            <h5 class="title_h5">Nursing on Demand</h5>\n            <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce et metus.Lorem ... <a style="color: #666;font-size: 14px; font-weight: 400; cursor: pointer;">See More</a></p>\n            <span class="dt">Jan 24 at 08:00 pm</span>\n        </ion-col>\n    </ion-row>\n\n    <ion-row class="bg_b">\n        <ion-col col-4>\n            <img src="assets/imgs/notifa.png">\n        </ion-col>\n        <ion-col col-8>\n            <h5 class="title_h5">Nursing on Demand</h5>\n            <p class="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce et metus.Lorem ... <a style="color: #666;font-size: 14px; font-weight: 400; cursor: pointer;">See More</a></p>\n            <span class="dt">Jan 20 at 11:00 am</span>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/notification/notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=34.js.map