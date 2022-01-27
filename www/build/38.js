webpackJsonp([38],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_unique_device_id__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { TermsusePage} from "../termsuse/termsuse";






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation..
 * 3
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, userServices, events, alertCtrl, loadingCtrl, geolocation, fb, uniqueDeviceID, fcm) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.userServices = userServices;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.fb = fb;
        this.uniqueDeviceID = uniqueDeviceID;
        this.fcm = fcm;
        this.isLoggedIn = false;
        this.FB_APP_ID = 2276720275901192;
        this.geolocation.getCurrentPosition().then(function (position) {
            //   this.uniqueDeviceID.get()
            // .then((uuid: any)=>{
            //  this.udid = uuid;
            // console.log("udid",this.udid)
            // })
            _this.lat = position.coords.latitude;
            _this.long = position.coords.longitude;
            localStorage.setItem('lat', _this.lat);
            localStorage.setItem('long', _this.long);
            console.log("lattitute", position.coords.latitude);
            console.log("lattitute", position.coords.longitude);
        });
        fb.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === "connect") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
        this.authForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('^[A-Z0-9a-z._%+-]+@([A-Za-z0-9-]+.)+[A-Za-z]{2,4}$')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)])],
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            console.log("device token", token);
            _this.udid = token;
        });
        this.loading1 = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.forgotPass = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.onSubmit = function (value) {
        var _this = this;
        console.log(value);
        if (this.authForm.valid) {
            this.showLoading();
            this.userServices.login(value, this.lat, this.long, this.udid).subscribe(function (datas) {
                console.log(datas);
                if (datas.message === 'successfull') {
                    localStorage.setItem('user_mobile', datas.result.phone_number);
                    localStorage.setItem('user_address', datas.result.address);
                    _this.events.publish('user_id', datas.result.id);
                    localStorage.setItem('user_id', datas.result.id);
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot('NursingselectPage');
                }
                else if (datas.result) {
                    _this.showError(datas.result);
                }
            });
        }
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.facebookLogin = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.loading1.present();
                //alert('hello2')
                _this.isLoggedIn = true;
                _this.getUserDetail(res.authResponse.userID);
                //alert('hello3')
                console.log(res.authResponse);
                //console.log("data fb",this.fbUserId,this.fbEmail,this.fbUserName)
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        //alert(userid +'hello4');
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            _this.users = res;
            console.log('userData', _this.users);
            _this.fbEmail = _this.users.email;
            _this.fbUserId = userid;
            _this.fbImg = encodeURIComponent(_this.users.picture.data.url);
            //let img = this.fbImg
            //localStorage.setItem('img',this.fbImg);
            _this.fbUserName = _this.users.name;
            _this.fbUserName = _this.fbUserName.split(" ");
            _this.firstname = _this.fbUserName[0];
            _this.lastname = _this.fbUserName[1];
            console.log(_this.fbUserId, _this.fbEmail, _this.fbImg, _this.fbUserName);
            var lat = localStorage.getItem('lat');
            var long = localStorage.getItem('long');
            //this.showLoading()
            _this.userServices.fbLogin(_this.firstname, _this.lastname, _this.fbEmail, _this.fbUserId, _this.fbImg, lat, long).subscribe(function (userFbData) {
                console.log(userFbData);
                if (userFbData.message === 'successfull') {
                    _this.loading1.dismiss();
                    localStorage.setItem('user_mobile', userFbData.result.phone_number);
                    localStorage.setItem('user_address', userFbData.result.address);
                    localStorage.setItem('user_id', userFbData.result.id);
                    _this.events.publish('user_id', userFbData.result.id);
                    _this.events.publish('name', userFbData.result.firstname + " " + userFbData.result.lastname);
                    _this.events.publish('userPic', userFbData.result.image);
                    _this.navCtrl.setRoot('NursingselectPage');
                }
                else if (userFbData.result) {
                    _this.showError(userFbData.result);
                }
                //this.showError('Facebook Login Successfully');
            });
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mac/Documents/ionic/nursing/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n <img class="img-logo" src="assets/imgs/logo.png">\n<ion-row>\n<div class="desin1">\n  <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n    <div class="errorsText" *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n      <p >Required Name</p>\n    </div>\n    <div class="errorsText" *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n      <p>Invalid Name</p>\n    </div>\n    <div [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n      <input type="email" formControlName="email" placeholder="Email Address" />\n    </div>\n\n    <div class="errorsText" *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n      <p >Required Password</p>\n    </div>\n    <div class="errorsText" *ngIf="authForm.controls.password.hasError(\'pattern\') && authForm.controls.password.touched">\n      <p>Invalid Password</p>\n    </div>\n    <div [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n      <input type="password" formControlName="password" placeholder="Password" />\n    </div>\n\n  <div class="text-center">\n  <button class="forgot" ion-button (click)="forgotPass()" style="background: none;">Forgot password?</button>\n  </div>\n\n  <button class="btn-login" ion-button full [disabled]="!authForm.valid" style="background-color: #458fd0;">Login</button>\n  </form>\n  <button class="btn-fb" (click)="facebookLogin()" ion-button full style="background-color: #3b5998;"><ion-icon name="logo-facebook" ></ion-icon> &nbsp;&nbsp;&nbsp; Sign in via Facebook </button>\n  <div class="" style="text-align: center">\n    <button  ion-button small clear class="SignUp" (click)="signup()" style="background: none;">New to Nursing on Demand?</button>\n    </div>\n</div>\n</ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/mac/Documents/ionic/nursing/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_fcm__["a" /* FCM */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=38.js.map