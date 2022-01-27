webpackJsonp([47],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DidyouKnowPageModule", function() { return DidyouKnowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__didyou_know__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DidyouKnowPageModule = /** @class */ (function () {
    function DidyouKnowPageModule() {
    }
    DidyouKnowPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__didyou_know__["a" /* DidyouKnowPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__didyou_know__["a" /* DidyouKnowPage */]),
            ],
        })
    ], DidyouKnowPageModule);
    return DidyouKnowPageModule;
}());

//# sourceMappingURL=didyou-know.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DidyouKnowPage; });
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


//import {DiddetailsPage} from "../diddetails/diddetails";

/**
 * Generated class for the DidyouKnowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DidyouKnowPage = /** @class */ (function () {
    function DidyouKnowPage(navCtrl, navParams, userService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.userService.getAllblog().subscribe(function (res) {
            _this.blogList = res.result;
            console.log(_this.blogList);
        });
    }
    DidyouKnowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DidyouKnowPage');
    };
    DidyouKnowPage.prototype.diddetails = function (blogid) {
        console.log(blogid);
        this.navCtrl.setRoot('DiddetailsPage', { 'blog_id': blogid });
    };
    DidyouKnowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-didyou-know',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/didyou-know/didyou-know.html"*/'<!--\n  Generated template for the DidyouKnowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Did you Know</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n <div class="family_one" *ngFor="let did of blogList" >\n    <img style="    height: 200px;\n    width: 100%;\n    object-fit: cover;" src={{did.blog_image}} (click)="diddetails(did.id)"/>\n    <span style="color: #177ec0;\n    font-size: 12px;\n    margin-left: 12px;\n    font-weight: bold;">{{did.created_date | date}}</span>\n    <h1 style="    margin-top: 4px;\n    font-size: 18px;\n    color: #000;\n    margin-left: 10px;\n    font-weight: bold;">{{did.blog_name}}</h1>\n    <p style="    display: -webkit-box;\n    max-width: 95%;\n    height: 56px;\n    margin: 0 auto;\n    font-size: 11px;\n    display: -webkit-box;\n    line-height: 19px;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis; margin-bottom: 5px;">{{did.blog_description}}\n    </p>\n </div>\n\n   \n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/didyou-know/didyou-know.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], DidyouKnowPage);
    return DidyouKnowPage;
}());

//# sourceMappingURL=didyou-know.js.map

/***/ })

});
//# sourceMappingURL=47.js.map