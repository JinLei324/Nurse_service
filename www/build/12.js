webpackJsonp([12],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewfamilyPageModule", function() { return ViewfamilyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewfamily__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewfamilyPageModule = /** @class */ (function () {
    function ViewfamilyPageModule() {
    }
    ViewfamilyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewfamily__["a" /* ViewfamilyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewfamily__["a" /* ViewfamilyPage */]),
            ],
        })
    ], ViewfamilyPageModule);
    return ViewfamilyPageModule;
}());

//# sourceMappingURL=viewfamily.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewfamilyPage; });
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



//import { FamilyprofilePage } from '../familyprofile/familyprofile';
//import { EditmemberProfilePage } from '../editmember-profile/editmember-profile';
/**
 * Generated class for the ViewfamilyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewfamilyPage = /** @class */ (function () {
    function ViewfamilyPage(navCtrl, navParams, userServices) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServices = userServices;
        this.image = 'assets/imgs/user.png';
        this.user_id = localStorage.getItem('user_id');
        console.log(this.user_id);
        this.userServices.getfamilyMember(this.user_id).subscribe(function (res) {
            _this.familydata = res.result;
            console.log(_this.familydata);
        });
    }
    ViewfamilyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewfamilyPage');
    };
    ViewfamilyPage.prototype.viewFamily = function (memberId) {
        console.log(memberId);
        this.navCtrl.setRoot('EditmemberProfilePage', { 'member_id': memberId });
    };
    ViewfamilyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-viewfamily',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/viewfamily/viewfamily.html"*/'<!--\n  Generated template for the FamilyprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Family Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-row class="info-dada" *ngFor="let family of familydata">\n    <h1>{{family.relation}}-{{family.firstname }} {{ family.lastname}} <span style="float: right"> <ion-icon name="create" (click)="viewFamily(family.id)" class="edit"></ion-icon>\n    </span></h1>\n  <ion-col col-5 class="user">\n   <img src="{{family.image ? family.image : image}}" style=" width: 115px;\n   height: 115px;\n   object-fit: contain;">\n  </ion-col>\n    <ion-col col-7>\n    <div class="img-content">\n     <h3>Personal info</h3>\n      <p>Contact No.: <strong>{{family.phone_number ? family.phone_number : \'N/A\'}}</strong></p>\n      <p>Email: <strong>{{family.email ? family.email : \'N/A\'}}</strong></p>\n    </div>\n\n      <div class="img-content">\n        <h3>Doctors info</h3>\n        <p>Name: <strong>{{family.doctor_name ? family.doctor_name  : \'N/A\'}}</strong></p>\n        <p>Contact No.: <strong>{{family.doctor_phone_number ? family.doctor_phone_number : \'N/A\'}}</strong></p>\n        <p>Email: <strong>{{family.doctor_email ? family.doctor_email : \'N/A\'}}</strong></p>\n      </div>\n\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/viewfamily/viewfamily.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], ViewfamilyPage);
    return ViewfamilyPage;
}());

//# sourceMappingURL=viewfamily.js.map

/***/ })

});
//# sourceMappingURL=12.js.map