webpackJsonp([50],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChattingPageModule", function() { return ChattingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChattingPageModule = /** @class */ (function () {
    function ChattingPageModule() {
    }
    ChattingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatting__["a" /* ChattingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatting__["a" /* ChattingPage */]),
            ],
        })
    ], ChattingPageModule);
    return ChattingPageModule;
}());

//# sourceMappingURL=chatting.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
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
 * Generated class for the ChattingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChattingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChattingPage');
    };
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/chatting/chatting.html"*/'<ion-header>\n\n  <ion-navbar>\n  \n    <ion-title>Nursing On Demand</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="message ads10">\n    <img class="user-img" src="assets/imgs/girsimg.png" alt="">\n    <div class="msg-detail">\n      <div class="msg-info">\n        <p>1 year ago</p>\n      </div>\n      <div class="msg-content">\n        <span class="triangle"></span>\n        <p class="line-breaker">hiiii </p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class="message ads10">\n    <img class="user-img" src="assets/imgs/girsimg.png" alt="">\n    <div class="msg-detail">\n      <div class="msg-info">\n        <p>1 year ago</p>\n      </div>\n      <div class="msg-content">\n        <span class="triangle"></span>\n        <p class="line-breaker">How are you </p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class="message ads10">\n    <img class="img-left" src="assets/imgs/nueschat.png" alt="">\n    <div class="msg-detail-l">\n      <div class="msg-info-l">\n        <p>1 year ago</p>\n      </div>\n      <div class="msg-content-l">\n        <span class="triangle-l"></span>\n        <p class="line-breaker">hiii</p>\n      </div>\n    </div>\n  </div>\n\n  <div class="message ads10">\n    <img class="img-left" src="assets/imgs/nueschat.png" alt="">\n    <div class="msg-detail-l">\n      <div class="msg-info-l">\n        <p>1 year ago</p>\n      </div>\n      <div class="msg-content-l">\n        <span class="triangle-l"></span>\n        <p class="line-breaker">i m fine and you</p>\n      </div>\n    </div>\n  </div>\n\n  <div class="message ads10">\n    <img class="user-img" src="assets/imgs/girsimg.png" alt="">\n    <div class="msg-detail">\n      <div class="msg-info">\n        <p>1 year ago</p>\n      </div>\n      <div class="msg-content">\n        <span class="triangle"></span>\n        <p class="line-breaker">Lorem Ipsum is simply dummy text of the printing and typesetting </p>\n      </div>\n    </div>\n  </div>\n\n  <div class="message ads10">\n    <img class="user-img" src="assets/imgs/girsimg.png" alt="">\n    <div class="msg-detail">\n      <div class="msg-info">\n        <p>1 year ago</p>\n      </div>\n      <div class="msg-content">\n        <span class="triangle"></span>\n        <p class="line-breaker">What is Lorem Ipsum?</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class="message ads10">\n    <img class="img-left" src="assets/imgs/nueschat.png" alt="">\n    <div class="msg-detail-l">\n      <div class="msg-info-l">\n        <p>1 year ago</p>\n      </div>\n      <div class="msg-content-l">\n        <span class="triangle-l"></span>\n        <p class="line-breaker">Why do we use it?</p>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n\n<ion-footer>\n\n      <div class="textbar-write">\n        <textarea type="text" placeholder="Type hrer...."></textarea>\n        <label>\n          <ion-icon name="paper-plane"></ion-icon>\n        </label>\n      </div>\n</ion-footer>\n\n\n '/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/chatting/chatting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ })

});
//# sourceMappingURL=50.js.map