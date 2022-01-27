webpackJsonp([54],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionDetailsPageModule", function() { return AdditionDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addition_details__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdditionDetailsPageModule = /** @class */ (function () {
    function AdditionDetailsPageModule() {
    }
    AdditionDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addition_details__["a" /* AdditionDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addition_details__["a" /* AdditionDetailsPage */]),
            ],
        })
    ], AdditionDetailsPageModule);
    return AdditionDetailsPageModule;
}());

//# sourceMappingURL=addition-details.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionDetailsPage; });
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
 * Generated class for the AdditionDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdditionDetailsPage = /** @class */ (function () {
    function AdditionDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = navParams.get('details');
        console.log(this.data);
    }
    AdditionDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdditionDetailsPage');
    };
    AdditionDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-addition-details',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/addition-details/addition-details.html"*/'<!--\n  Generated template for the AdditionDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Additional Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-row class="manage-r">\n   <ion-col col-2>\n   <img src="assets/imgs/a1.png">\n   </ion-col>\n\n   <ion-col col-10>\n   <h3>Visit Type </h3>\n     <p>{{data.visitType}}</p>\n   </ion-col>\n\n  </ion-row>\n\n  <ion-row class="manage-r">\n    <ion-col col-2>\n      <img src="assets/imgs/a2.png">\n    </ion-col>\n\n    <ion-col col-10>\n      <h3>Gender of person needing care </h3>\n      <p>{{data.gender}}</p>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="manage-r">\n    <ion-col col-2>\n      <img src="assets/imgs/a3.png">\n    </ion-col>\n\n    <ion-col col-10>\n      <h3>Have you recently been discharge from medical facility? </h3>\n      <p>{{data.madical}}</p>\n    </ion-col>\n\n  </ion-row>\n\n\n  <ion-row class="manage-r">\n    <ion-col col-2>\n      <img src="assets/imgs/a4.png">\n    </ion-col>\n\n    <ion-col col-10>\n      <h3>Do you have doctors orders provided?</h3>\n      <p>{{data.doc_order}}</p>\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row class="manage-r">\n    <ion-col col-2>\n      <img src="assets/imgs/a5.png">\n    </ion-col>\n\n    <ion-col col-10>\n      <h3>Needs</h3>\n      <p>{{data.needs}}</p>\n    </ion-col>\n\n  </ion-row>\n\n\n  <ion-row class="manage-r">\n    <ion-col col-2>\n      <img src="assets/imgs/a6.png">\n    </ion-col>\n\n    <ion-col col-10>\n      <h3>Details of person needing care</h3>\n      <p>  <ion-icon name="locate"></ion-icon>  {{data.address}}</p>\n      <p> <ion-icon name="call"></ion-icon>  {{data.number}}</p>\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/addition-details/addition-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], AdditionDetailsPage);
    return AdditionDetailsPage;
}());

//# sourceMappingURL=addition-details.js.map

/***/ })

});
//# sourceMappingURL=54.js.map