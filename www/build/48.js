webpackJsonp([48],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiddetailsPageModule", function() { return DiddetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diddetails__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiddetailsPageModule = /** @class */ (function () {
    function DiddetailsPageModule() {
    }
    DiddetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__diddetails__["a" /* DiddetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__diddetails__["a" /* DiddetailsPage */]),
            ],
        })
    ], DiddetailsPageModule);
    return DiddetailsPageModule;
}());

//# sourceMappingURL=diddetails.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiddetailsPage; });
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
 * Generated class for the DiddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DiddetailsPage = /** @class */ (function () {
    function DiddetailsPage(navCtrl, navParams, userService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.postList = [];
        this.blog_id = this.navParams.get('blog_id');
        console.log(this.blog_id);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.userService.blogDescription(this.blog_id).subscribe(function (res) {
            _this.blogList = res.result;
            console.log(_this.blogList);
            loading.dismiss();
            _this.blog_name = _this.blogList.blog_name;
            _this.blog_date = _this.blogList.created_date;
            _this.blog_dec = _this.blogList.blog_description;
            _this.postList = _this.blogList.description;
            _this.post_img = _this.blogList.blog_image;
            console.log(_this.postList);
        });
    }
    DiddetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiddetailsPage');
    };
    DiddetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-diddetails',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/diddetails/diddetails.html"*/'<!--\n  Generated template for the DiddetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Did you know</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n\n\n  <div class="family_one">\n    <img style="    height: 200px;\n    width: 100%;\n    object-fit: cover;" src={{post_img}}/>\n    \n    <ul>\n      <li><img src="assets/imgs/insta.png"></li>\n      <li><img src="assets/imgs/gogless.png"></li>\n      <li><img src="assets/imgs/fbsa.png"></li>\n      <li><img src="assets/imgs/pintest.png"></li>\n      <li style="float:right;"><span style="color: #177ec0;\n    font-size: 12px;\n    margin-left: 12px;\n    font-weight: bold;">{{blog_date | date}}</span></li>\n\n    </ul>\n    <h1 style="    margin-top: 4px;\n    font-size: 18px;\n    color: #000;\n    margin-left: 10px;\n    font-weight: bold;">{{blog_name}}</h1>\n    <p style="    width: 95%;\n    margin: 0 auto;\n    font-size: 11px;\n    margin-bottom: 5px;\n    line-height: 19px;">{{blog_dec}}\n    </p>\n    <p style="    width: 95%;\n    margin: 0 auto;\n    font-size: 11px;\n    margin-bottom: 5px;\n    line-height: 19px;" *ngFor="let blog of postList;" [innerHTML]="blog.description">\n    </p>\n    \n    \n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/diddetails/diddetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], DiddetailsPage);
    return DiddetailsPage;
}());

//# sourceMappingURL=diddetails.js.map

/***/ })

});
//# sourceMappingURL=48.js.map