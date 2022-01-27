webpackJsonp([22],{

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {AboutusPage} from "../aboutus/aboutus";
//import {FaqsPage} from "../faqs/faqs";
//import {RatenursingPage} from "../ratenursing/ratenursing";
//import {ContactusPage} from "../contactus/contactus";
//import {CancellationPolicyPage} from "../cancellation-policy/cancellation-policy";
//import {UpdatePasswordPage} from "../update-password/update-password";
//import {MyprofilePage} from "../myprofile/myprofile";

//import { ShareappPage } from '../shareapp/shareapp';
//import { NotificationPage } from '../notification/notification';
//import { ElectronicnotesPage } from '../electronicnotes/electronicnotes';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, userServices, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServices = userServices;
        this.socialSharing = socialSharing;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.aboutUs = function () {
        this.navCtrl.push('AboutusPage');
    };
    SettingsPage.prototype.faqs = function () {
        this.navCtrl.push('FaqsPage');
    };
    SettingsPage.prototype.contactUs = function () {
        this.navCtrl.push('ContactusPage');
    };
    SettingsPage.prototype.cancelPolicy = function () {
        this.navCtrl.push('CancellationPolicyPage');
    };
    SettingsPage.prototype.updatePass = function () {
        this.navCtrl.push('UpdatePasswordPage');
    };
    SettingsPage.prototype.myprofile = function () {
        this.navCtrl.push('MyprofilePage');
    };
    SettingsPage.prototype.shareApp = function () {
        ///this.navCtrl.push(ShareappPage);
        // this.socialSharing.shareViaEmail('https://play.google.com/store?hl=en', 'Nursingondemand App', ['@gmail.com']).then(() => {
        //   // Succ
        // }).catch(() => {
        //   // Error!
        // });
        this.socialSharing.share("NursingOnDemand", "You can download here App", "", "https://play.google.com/store?hl=en").
            then(function () {
            alert("Sharing success");
            // Success!
        }).catch(function () {
            // Error!
            alert("Share failed");
        });
    };
    SettingsPage.prototype.notification = function () {
        this.navCtrl.push('NotificationPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item (click)="myprofile()"><img src="assets/imgs/profile.png" class="setting_pic"> <span class="menu_setting">My Profile</span></ion-item>\n   \n    <ion-item (click)="updatePass()"><img src="assets/imgs/password.png" class="setting_pic"> <span class="menu_setting">Update Password</span></ion-item>\n    <ion-item (click)="aboutUs()"><img src="assets/imgs/about.png" class="setting_pic"> <span class="menu_setting">About Us</span></ion-item>\n    <ion-item (click)="cancelPolicy()"><img src="assets/imgs/policy.png" class="setting_pic"> <span class="menu_setting">Cancellation Policy</span></ion-item>\n    <ion-item (click)="contactUs()"><img src="assets/imgs/contact.png" class="setting_pic"> <span class="menu_setting">Contact Us</span></ion-item>\n\n    <!-- <ion-item (click)="notification()"><img src="assets/imgs/noti.png" class="setting_pic"> <span class="menu_setting">Notification</span ></ion-item> -->\n    <ion-item (click)="faqs()"><img src="assets/imgs/info.png" class="setting_pic"> <span class="menu_setting">FAQs</span></ion-item>\n   \n    <!-- <ion-item (click)="shareApp()"><img src="assets/imgs/share.png" class="setting_pic"> <span class="menu_setting">Share</span></ion-item> -->\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=22.js.map