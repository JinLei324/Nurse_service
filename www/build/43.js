webpackJsonp([43],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectronicnotesPageModule", function() { return ElectronicnotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__electronicnotes__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ElectronicnotesPageModule = /** @class */ (function () {
    function ElectronicnotesPageModule() {
    }
    ElectronicnotesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__electronicnotes__["a" /* ElectronicnotesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__electronicnotes__["a" /* ElectronicnotesPage */]),
            ],
        })
    ], ElectronicnotesPageModule);
    return ElectronicnotesPageModule;
}());

//# sourceMappingURL=electronicnotes.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElectronicnotesPage; });
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
 * Generated class for the ElectronicnotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ElectronicnotesPage = /** @class */ (function () {
    function ElectronicnotesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ElectronicnotesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ElectronicnotesPage');
    };
    ElectronicnotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-electronicnotes',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/electronicnotes/electronicnotes.html"*/'<!--\n  Generated template for the ElectronicnotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Electronic Notes </ion-title>\n    <ion-icon ios="ios-add" md="md-add" class="plus"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<p class="para_p"> Electronic Notes enables us to provide daily notes to your physician and your family. Please share the contact details of the respective persons so that we can get in touch with them \n  </p>\n  <ion-list radio-group [(ngModel)]="relationship">\n      <ion-item>\n          <ion-radio value="value1" checked></ion-radio>\n        <ion-label>Shawn Taylor<br>225-974-3214<br>Shawn@gmail.com</ion-label>\n       \n      </ion-item>\n      <ion-item>\n          <ion-radio value="value2"></ion-radio>\n        <ion-label>Dennis Williams<br>225-954-3214<br>Dennisgmail.com</ion-label>\n        \n      </ion-item>\n      <ion-item>\n          <ion-radio value="value3" [disabled]="isDisabled"></ion-radio>\n        <ion-label>Wing Butler<br>225-956-6714<br>wing@gmail.com</ion-label>\n        \n      </ion-item>\n      <ion-item>\n          <ion-radio value="value4" [disabled]="isDisabled"></ion-radio>\n        <ion-label>Marcus Allan<br>225-956-6714<br>marcusgmail.com</ion-label>\n        \n      </ion-item>\n    </ion-list>\n    <button ion-button full class="done">Done</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/electronicnotes/electronicnotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ElectronicnotesPage);
    return ElectronicnotesPage;
}());

//# sourceMappingURL=electronicnotes.js.map

/***/ })

});
//# sourceMappingURL=43.js.map