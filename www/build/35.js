webpackJsonp([35],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyplansPageModule", function() { return MyplansPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myplans__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyplansPageModule = /** @class */ (function () {
    function MyplansPageModule() {
    }
    MyplansPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myplans__["a" /* MyplansPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myplans__["a" /* MyplansPage */]),
            ],
        })
    ], MyplansPageModule);
    return MyplansPageModule;
}());

//# sourceMappingURL=myplans.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyplansPage; });
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
 * Generated class for the MyplansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyplansPage = /** @class */ (function () {
    function MyplansPage(navCtrl, navParams, userServ, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServ = userServ;
        this.loadingCtrl = loadingCtrl;
        this.planList = [];
        this.planoff = false;
        this.user_id = localStorage.getItem('user_id');
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.userServ.purchasedPlan(this.user_id).subscribe(function (res) {
            console.log(res);
            if (res.message == "successfull") {
                _this.planoff = true;
                _this.planList = res.result;
                _this.plan_length = res.result.length;
                console.log(_this.planList);
                loading.dismiss();
            }
            else if (res.message == "unsuccessfull") {
                loading.dismiss();
            }
        });
    }
    MyplansPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyplansPage');
    };
    MyplansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-myplans',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/myplans/myplans.html"*/'<!--\n  Generated template for the MyplansPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Purchased Plans</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <div class="plasnaa" *ngIf="planoff">\n\n\n    \n<div class="total-heading">\n    <p>Total Purchased Plan <span>{{plan_length}}</span></p>\n   </div>\n   \n   <div class="bg-plans" *ngFor="let plan of planList">\n   \n   <div class="purches-p">\n    <h2>Purchased Plan</h2>\n     <p style="  border-bottom: 1px solid #c9c5c5;\n     padding: 0px 0 11px 0;">{{plan.plan_details.plan_name}} {{plan.plan_details.visits}} Visits per month  (Includes {{plan.plan_details.free_visits}} free Visits)</p>\n   </div>\n   <div class="purches-p">\n     <h2>Plan Price</h2>\n     <p> $ {{plan.plan_details.price}}</p>\n   </div>\n     <div class="purches-p">\n       <h2>Subscription date</h2>\n       <p>{{plan.plan_details.created_date | date}}</p>\n     </div>\n   \n     <div class="purches-p">\n       <h2>Expiration Date</h2>\n       <p>{{plan.expiry_date | date}}</p>\n     </div><hr>\n   \n   \n     <!-- <div class="purches-p" style="border: none">\n       <h2>Visits Details</h2>\n       <p>Visit 1<span>August 10, 2017</span></p>\n       <p>Visit 2<span>August 25, 2017</span></p>\n       <p>Visit 3<span>August 10, 2017</span></p>\n       <p>Visit 4 <span>August 10, 2017</span></p>\n       <p style="color: #177ec0;">Remaining Visits <span style="color: #000;"> 11 Visit </span></p>\n     </div> -->\n   \n   </div>\n\n  </div>\n\n\n  <div class="noplans" *ngIf="!planoff">\n    <img src="assets/imgs/errroe.png">\n  <h3>You have no plan please <br> purchase plan.</h3>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/myplans/myplans.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], MyplansPage);
    return MyplansPage;
}());

//# sourceMappingURL=myplans.js.map

/***/ })

});
//# sourceMappingURL=35.js.map