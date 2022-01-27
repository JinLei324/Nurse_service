webpackJsonp([56],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		292,
		55
	],
	"../pages/addition-details/addition-details.module": [
		293,
		54
	],
	"../pages/allservice/allservice.module": [
		294,
		53
	],
	"../pages/bothservices/bothservices.module": [
		295,
		52
	],
	"../pages/cancellation-policy/cancellation-policy.module": [
		296,
		51
	],
	"../pages/chatting/chatting.module": [
		297,
		50
	],
	"../pages/complete-personal-care/complete-personal-care.module": [
		298,
		10
	],
	"../pages/complete-request/complete-request.module": [
		299,
		9
	],
	"../pages/contactus/contactus.module": [
		301,
		49
	],
	"../pages/diddetails/diddetails.module": [
		300,
		48
	],
	"../pages/didyou-know/didyou-know.module": [
		302,
		47
	],
	"../pages/edit-profile/edit-profile.module": [
		345,
		46
	],
	"../pages/editlocation/editlocation.module": [
		303,
		45
	],
	"../pages/editmember-profile/editmember-profile.module": [
		347,
		44
	],
	"../pages/electronicnotes/electronicnotes.module": [
		304,
		43
	],
	"../pages/familyprofile/familyprofile.module": [
		344,
		42
	],
	"../pages/faqdetails/faqdetails.module": [
		305,
		41
	],
	"../pages/faqs/faqs.module": [
		306,
		40
	],
	"../pages/forgot-password/forgot-password.module": [
		307,
		39
	],
	"../pages/login/login.module": [
		308,
		38
	],
	"../pages/logoutfromnursing/logoutfromnursing.module": [
		343,
		37
	],
	"../pages/mdpickuplocation/mdpickuplocation.module": [
		312,
		36
	],
	"../pages/myplans/myplans.module": [
		310,
		35
	],
	"../pages/myprofile/myprofile.module": [
		309,
		8
	],
	"../pages/needscare/needscare.module": [
		346,
		7
	],
	"../pages/notification/notification.module": [
		311,
		34
	],
	"../pages/notreceivingemail/notreceivingemail.module": [
		313,
		33
	],
	"../pages/nursing-personal/nursing-personal.module": [
		314,
		32
	],
	"../pages/nursingcareservices/nursingcareservices.module": [
		315,
		31
	],
	"../pages/nursingdemandmap/nursingdemandmap.module": [
		316,
		30
	],
	"../pages/nursingselect/nursingselect.module": [
		317,
		29
	],
	"../pages/payment-method/payment-method.module": [
		318,
		6
	],
	"../pages/payment/payment.module": [
		319,
		5
	],
	"../pages/paymentdetail/paymentdetail.module": [
		320,
		4
	],
	"../pages/pricingplans/pricingplans.module": [
		321,
		28
	],
	"../pages/privacypolicy/privacypolicy.module": [
		322,
		27
	],
	"../pages/ratenursing/ratenursing.module": [
		323,
		0
	],
	"../pages/requesthistory/requesthistory.module": [
		325,
		3
	],
	"../pages/scheduledrequests/scheduledrequests.module": [
		324,
		26
	],
	"../pages/schedulevisit/schedulevisit.module": [
		326,
		25
	],
	"../pages/service-check/service-check.module": [
		327,
		2
	],
	"../pages/services-info/services-info.module": [
		328,
		24
	],
	"../pages/services/services.module": [
		329,
		23
	],
	"../pages/settings/settings.module": [
		330,
		22
	],
	"../pages/shareapp/shareapp.module": [
		331,
		21
	],
	"../pages/shareappwithfriend/shareappwithfriend.module": [
		332,
		20
	],
	"../pages/signup/signup.module": [
		333,
		1
	],
	"../pages/supplier/supplier.module": [
		334,
		19
	],
	"../pages/termscondition/termscondition.module": [
		335,
		18
	],
	"../pages/termsuse/termsuse.module": [
		336,
		17
	],
	"../pages/thankyourating/thankyourating.module": [
		337,
		16
	],
	"../pages/unablelogin/unablelogin.module": [
		338,
		15
	],
	"../pages/update-password/update-password.module": [
		339,
		14
	],
	"../pages/updateprofile/updateprofile.module": [
		340,
		13
	],
	"../pages/viewfamily/viewfamily.module": [
		341,
		12
	],
	"../pages/welcomelogin/welcomelogin.module": [
		342,
		11
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var apiUrl = 'http://www.air.sideworkapps.com/nursingondemand/webservice/';
//let apiUrl = 'http://192.168.2.110/nursingondemand/index.php/webservice/';
//let apiUrl = 'http://192.168.43.23/nursingondemand/index.php/webservice/';
var stripChargeUrl = 'https://api.stripe.com/v1/charges';
var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(http) {
        this.http = http;
        console.log('Hello UserServiceProvider Provider');
    }
    UserServiceProvider.prototype.register = function (registerCred, lat, long, udid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' }); //'Access-Control-Allow-Origin': '*'
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(apiUrl + 'signup?' + '&firstname=' + registerCred.firstName + '&lastname=' + registerCred.lastName + '&email=' + registerCred.email + '&password=' + registerCred.password + '&phone_number=' + registerCred.phone +
            '&date_of_birth=' + registerCred.dob + '&lat=' + lat + '&lon=' + long + '&register_id=' + udid + '&user_type=' + 'USER', options)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.login = function (loginData, lat, long, udid) {
        console.log(loginData);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' }); //'Access-Control-Allow-Origin': '*'
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(apiUrl + 'login?' + '&email=' + loginData.email + '&password=' + loginData.password + '&lat=' + lat + '&lon=' + long + '&register_id=' + udid + '&user_type=' + 'USER', options)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getvisit_list = function () {
        return this.http.get(apiUrl + 'visit_list')
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.whoCares = function () {
        return this.http.get(apiUrl + 'care_list')
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.servicesType = function () {
        return this.http.get(apiUrl + 'service_type_list')
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.services = function (service_type_id) {
        console.log('id WS', service_type_id);
        return this.http.get(apiUrl + 'service_list?' + '&service_type_id=' + service_type_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getAllNurse = function (service_id, lat, lon) {
        console.log("my nurse details", service_id, lat, lon);
        return this.http.get(apiUrl + 'get_all_nurse_list?' + 'service_type_id=' + service_id + '&lat=' + lat + '&lon=' + lon)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getPrice = function (servicesId) {
        return this.http.get(apiUrl + 'get_all_price_list?' + 'service_type_id=' + servicesId)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getRating = function (user_id, rate) {
        return this.http.get(apiUrl + 'app_rating?' + '&user_id=' + user_id + '&rate=' + rate.rate + '&comment=' + rate.comment)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getfamilyMember = function (user_id) {
        return this.http.get(apiUrl + 'get_all_family_members_list?' + 'user_id=' + user_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.updateData = function (mobile, user_id) {
        console.log("service data", mobile, user_id);
        return this.http.get(apiUrl + 'update_phone_number?' + '&phone_number=' + mobile + '&user_id=' + user_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.updateAddress = function (user_id, address, lat, lng) {
        return this.http.get(apiUrl + 'update_address?' + 'user_id=' + user_id + '&address=' + address + '&lat=' + lat + '&lng=' + lng)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.priceDetails = function (pricing_id) {
        return this.http.get(apiUrl + 'price_details?' + 'price_id=' + pricing_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.fbLogin = function (fname, lname, fbEmail, fbUserId, fbImg, lat, long) {
        return this.http.get(apiUrl + 'social_login?' + '&firstname=' + fname + '&lastname=' + lname + '&email=' + fbEmail + '&social_id=' + fbUserId + '&image=' + fbImg + '&lat=' + lat + '&lon=' + long)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.addNewservice = function (service_id, service_name) {
        return this.http.get(apiUrl + 'add_new_service?' + 'service_type_id=' + service_id + '&service_name=' + service_name)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.request_care = function (request_data, plan_id) {
        return this.http.get(apiUrl + 'request_care?' + '&user_id=' + request_data.user_id + '&visit_id=' + request_data.visit_id + '&visit_date=' + request_data.visit_date
            + '&visit_time=' + request_data.visit_time + '&care_id=' + request_data.care_id + '&care_person=' + request_data.gender
            + '&medical_facility=' + request_data.medicalfacility + '&doctor_order=' + request_data.docProvidedorder
            + '&needs=' + request_data.needMessage + '&contact_number=' + request_data.contactNumber + '&additional_comments=' + request_data.commentMessage
            + '&authorize_person=' + request_data.authorizeBrhalf + '&service_type_id=' + request_data.service_id
            + '&service_id=' + request_data.servicesNameid + '&contact_address=' + request_data.contactAddress
            + '&plan_id=' + plan_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.userUpdateprofile = function (user_id, userData) {
        console.log(user_id, userData);
        return this.http.get(apiUrl + 'user_update?' + '&user_id=' + user_id + '&firstname=' + userData.firstname +
            '&lastname=' + userData.lastname + '&gender=' + userData.gender + '&email=' + userData.email + '&date_of_birth=' + userData.date_of_birth + '&phone_number=' + userData.phone_number +
            '&doctor_email=' + userData.docEmail + '&doctor_name=' + userData.docName + '&doctor_phone_number=' + userData.docMobile)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.addFamily = function (user_id, value) {
        return this.http.get(apiUrl + 'add_family_members?' + '&user_id=' + user_id + '&firstname=' + value.firstname +
            '&lastname=' + value.lastname + '&gender=' + value.gender + '&email=' + value.email + '&phone_number=' + value.mobile + '&doctor_name=' + value.docName + '&date_of_birth=' + value.dob
            + '&doctor_email=' + value.docEmail + '&doctor_phone_number=' + value.docMobile + '&relation=' + value.relation)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getMemberProfile = function (memberId) {
        return this.http.get(apiUrl + 'get_member_profile?' + 'member_id=' + memberId)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.updateFamilymember = function (memberId, memberdata) {
        return this.http.get(apiUrl + 'update_family_members?' + 'member_id=' + memberId + '&relation=' + memberdata.relation
            + '&firstname=' + memberdata.firstname + '&lastname=' + memberdata.lastname + '&gender=' + memberdata.gender
            + '&date_of_birth=' + memberdata.dob + '&email=' + memberdata.email + '&phone_number=' + memberdata.mobile
            + '&doctor_name=' + memberdata.docName + '&doctor_email=' + memberdata.docEmail + '&doctor_phone_number=' + memberdata.docMobile)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.priceList = function (service_id) {
        return this.http.get(apiUrl + 'get_all_price_list_by_service_type?' + 'service_type_id=' + service_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getAllpriceList = function () {
        return this.http.get(apiUrl + 'get_all_price_list')
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getAllPriceListDaily = function () {
        return this.http.get(apiUrl + 'get_all_price_list_daily')
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getAllblog = function () {
        return this.http.get(apiUrl + 'get_all_blog_list')
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.blogDescription = function (blog_id) {
        return this.http.get(apiUrl + 'get_blog_details?' + 'blog_id=' + blog_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.contactUs = function (value, user_id) {
        return this.http.get(apiUrl + 'contact_us?' + '&user_id=' + user_id + '&name=' + value.name +
            '&email=' + value.email + '&message=' + value.message)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.cancelRequest = function (requestId) {
        return this.http.get(apiUrl + 'request_cancel?' + 'request_id=' + requestId)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.requestDetails = function (requestId) {
        return this.http.get(apiUrl + 'request_details?' + 'request_id=' + requestId)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getprofile = function (user_id) {
        return this.http.get(apiUrl + 'get_profile?' + '&user_id=' + user_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.forgotPassword = function (email_id) {
        return this.http.get(apiUrl + 'forgot_password?' + 'email=' + email_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.authorizePerson = function (user_id, authorizeData) {
        return this.http.get(apiUrl + 'add_authorize_person?' + 'user_id=' + user_id + '&person_name=' + authorizeData.person_name
            + '&person_email=' + authorizeData.person_email + '&person_phonenumber=' + authorizeData.person_mobile)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.updatePassword = function (user_id, value) {
        return this.http.get(apiUrl + 'change_password?' + 'user_id=' + user_id + '&old_password=' + value.oldpwd + '&password=' + value.newpwd)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.purchasedPlan = function (user_id) {
        return this.http.get(apiUrl + 'get_purchased_plan_lists?' + 'user_id=' + user_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getRequestHistory = function (user_id) {
        console.log("user id", user_id);
        return this.http.get(apiUrl + 'get_all_request_list?' + 'user_id=' + user_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.updateDoctor = function (drData) {
        return this.http.get(apiUrl + 'update_doctor_info?' + 'user_id=' + drData.user_id + '&doctor_name=' + drData.drname
            + '&doctor_email=' + drData.dremail + '&doctor_phone_number=' + drData.drphone)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.paytoStripe = function (data) {
        var stripeAuthHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        stripeAuthHeader.append('Content-Type', 'application/x-www-form-urlencoded');
        //stripeAuthHeader.append("Authorization", 'Bearer rk_test_JcrSWoYEhqQfftIEEvPLdirP009hIdQa6s');
        stripeAuthHeader.append("Authorization", 'Bearer rk_live_CYk5AXU16GvNqYVVwEflNCA300FTLUMiaP');
        return this.http.post(stripChargeUrl, data, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: stripeAuthHeader }))
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.get_current_request = function (user_id) {
        return this.http.get(apiUrl + 'get_current_request?' + 'user_id=' + user_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider.prototype.getUserSubscription = function (user_id) {
        return this.http.get(apiUrl + 'get_user_subscription?' + 'user_id=' + user_id)
            .map(function (response) { return response.json(); });
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(238);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic2_google_places_autocomplete__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_transfer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_path__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_geocoder__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_sms__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_fcm__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_unique_device_id__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_stripe__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list'; */


/* import { WelcomeloginPage } from '../pages/welcomelogin/welcomelogin';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TermsusePage } from '../pages/termsuse/termsuse';
import { NursingselectPage } from '../pages/nursingselect/nursingselect';
import { NeedscarePage } from '../pages/needscare/needscare';
import { ServicesPage } from '../pages/services/services';
import { SchedulevisitPage } from '../pages/schedulevisit/schedulevisit';
import { RequesthistoryPage } from '../pages/requesthistory/requesthistory';
import { ScheduledrequestsPage } from '../pages/scheduledrequests/scheduledrequests';
import { AdditionDetailsPage } from '../pages/addition-details/addition-details';
import { NursingPersonalPage } from '../pages/nursing-personal/nursing-personal';
import { PricingplansPage } from '../pages/pricingplans/pricingplans';
import { PaymentMethodPage } from '../pages/payment-method/payment-method';
import { MyplansPage } from '../pages/myplans/myplans';
import { DidyouKnowPage } from '../pages/didyou-know/didyou-know';
import { DiddetailsPage } from '../pages/diddetails/diddetails';
import { SettingsPage } from '../pages/settings/settings';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ServicesInfoPage } from '../pages/services-info/services-info';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { CancellationPolicyPage }  from '../pages/cancellation-policy/cancellation-policy';
import { ContactusPage } from '../pages/contactus/contactus';
import { FaqsPage } from '../pages/faqs/faqs';
import { RatenursingPage } from '../pages/ratenursing/ratenursing';
import { ServiceCheckPage } from '../pages/service-check/service-check';
import { UpdatePasswordPage } from '../pages/update-password/update-password'; */

/* import { MyprofilePage } from '../pages/myprofile/myprofile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile'; */

/* import {CompleteRequestPage} from "../pages/complete-request/complete-request";
import {FamilyprofilePage} from "../pages/familyprofile/familyprofile";
import {ViewfamilyPage} from "../pages/viewfamily/viewfamily";
import { PaymentPage } from '../pages/payment/payment';
import { NursingdemandmapPage } from '../pages/nursingdemandmap/nursingdemandmap';
import { SupplierPage } from '../pages/supplier/supplier';
import { AllservicePage } from '../pages/allservice/allservice';
import { TermsconditionPage } from '../pages/termscondition/termscondition';
import { MdpickuplocationPage } from '../pages/mdpickuplocation/mdpickuplocation';

import { ShareappPage } from '../pages/shareapp/shareapp';
import { NotificationPage } from '../pages/notification/notification';
import { ElectronicnotesPage } from '../pages/electronicnotes/electronicnotes';
import { BothservicesPage } from '../pages/bothservices/bothservices';
import { NursingcareservicesPage } from '../pages/nursingcareservices/nursingcareservices'; */


/* import { ChattingPage } from '../pages/chatting/chatting';
import { CompletePersonalCarePage } from '../pages/complete-personal-care/complete-personal-care'; */



/* import {PrivacypolicyPage} from "../pages/privacypolicy/privacypolicy";
import { FaqdetailsPage } from '../pages/faqdetails/faqdetails';
import { PaymentdetailPage } from "../pages/paymentdetail/paymentdetail";
import { ThankyouratingPage } from '../pages/thankyourating/thankyourating'; */



/* import { EditmemberProfilePage } from '../pages/editmember-profile/editmember-profile'; */


/* import { ShareappwithfriendPage } from '../pages/shareappwithfriend/shareappwithfriend';
import { UnableloginPage } from '../pages/unablelogin/unablelogin';
import { NotreceivingemailPage } from '../pages/notreceivingemail/notreceivingemail';
import { LogoutfromnursingPage } from '../pages/logoutfromnursing/logoutfromnursing';
import { UpdateprofilePage } from '../pages/updateprofile/updateprofile';
import { EditlocationPage } from '../pages/editlocation/editlocation'; */






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addition-details/addition-details.module#AdditionDetailsPageModule', name: 'AdditionDetailsPage', segment: 'addition-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/allservice/allservice.module#AllservicePageModule', name: 'AllservicePage', segment: 'allservice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bothservices/bothservices.module#BothservicesPageModule', name: 'BothservicesPage', segment: 'bothservices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cancellation-policy/cancellation-policy.module#CancellationPolicyPageModule', name: 'CancellationPolicyPage', segment: 'cancellation-policy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complete-personal-care/complete-personal-care.module#CompletePersonalCarePageModule', name: 'CompletePersonalCarePage', segment: 'complete-personal-care', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/complete-request/complete-request.module#CompleteRequestPageModule', name: 'CompleteRequestPage', segment: 'complete-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/diddetails/diddetails.module#DiddetailsPageModule', name: 'DiddetailsPage', segment: 'diddetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/didyou-know/didyou-know.module#DidyouKnowPageModule', name: 'DidyouKnowPage', segment: 'didyou-know', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editlocation/editlocation.module#EditlocationPageModule', name: 'EditlocationPage', segment: 'editlocation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/electronicnotes/electronicnotes.module#ElectronicnotesPageModule', name: 'ElectronicnotesPage', segment: 'electronicnotes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faqdetails/faqdetails.module#FaqdetailsPageModule', name: 'FaqdetailsPage', segment: 'faqdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faqs/faqs.module#FaqsPageModule', name: 'FaqsPage', segment: 'faqs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myplans/myplans.module#MyplansPageModule', name: 'MyplansPage', segment: 'myplans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mdpickuplocation/mdpickuplocation.module#MdpickuplocationPageModule', name: 'MdpickuplocationPage', segment: 'mdpickuplocation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notreceivingemail/notreceivingemail.module#NotreceivingemailPageModule', name: 'NotreceivingemailPage', segment: 'notreceivingemail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nursing-personal/nursing-personal.module#NursingPersonalPageModule', name: 'NursingPersonalPage', segment: 'nursing-personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nursingcareservices/nursingcareservices.module#NursingcareservicesPageModule', name: 'NursingcareservicesPage', segment: 'nursingcareservices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nursingdemandmap/nursingdemandmap.module#NursingdemandmapPageModule', name: 'NursingdemandmapPage', segment: 'nursingdemandmap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nursingselect/nursingselect.module#NursingselectPageModule', name: 'NursingselectPage', segment: 'nursingselect', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-method/payment-method.module#PaymentMethodPageModule', name: 'PaymentMethodPage', segment: 'payment-method', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paymentdetail/paymentdetail.module#PaymentdetailPageModule', name: 'PaymentdetailPage', segment: 'paymentdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pricingplans/pricingplans.module#PricingplansPageModule', name: 'PricingplansPage', segment: 'pricingplans', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/privacypolicy/privacypolicy.module#PrivacypolicyPageModule', name: 'PrivacypolicyPage', segment: 'privacypolicy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratenursing/ratenursing.module#RatenursingPageModule', name: 'RatenursingPage', segment: 'ratenursing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scheduledrequests/scheduledrequests.module#ScheduledrequestsPageModule', name: 'ScheduledrequestsPage', segment: 'scheduledrequests', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/requesthistory/requesthistory.module#RequesthistoryPageModule', name: 'RequesthistoryPage', segment: 'requesthistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/schedulevisit/schedulevisit.module#SchedulevisitPageModule', name: 'SchedulevisitPage', segment: 'schedulevisit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-check/service-check.module#ServiceCheckPageModule', name: 'ServiceCheckPage', segment: 'service-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/services-info/services-info.module#ServicesInfoPageModule', name: 'ServicesInfoPage', segment: 'services-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shareapp/shareapp.module#ShareappPageModule', name: 'ShareappPage', segment: 'shareapp', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/shareappwithfriend/shareappwithfriend.module#ShareappwithfriendPageModule', name: 'ShareappwithfriendPage', segment: 'shareappwithfriend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/supplier/supplier.module#SupplierPageModule', name: 'SupplierPage', segment: 'supplier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termscondition/termscondition.module#TermsconditionPageModule', name: 'TermsconditionPage', segment: 'termscondition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termsuse/termsuse.module#TermsusePageModule', name: 'TermsusePage', segment: 'termsuse', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thankyourating/thankyourating.module#ThankyouratingPageModule', name: 'ThankyouratingPage', segment: 'thankyourating', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/unablelogin/unablelogin.module#UnableloginPageModule', name: 'UnableloginPage', segment: 'unablelogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/update-password/update-password.module#UpdatePasswordPageModule', name: 'UpdatePasswordPage', segment: 'update-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updateprofile/updateprofile.module#UpdateprofilePageModule', name: 'UpdateprofilePage', segment: 'updateprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewfamily/viewfamily.module#ViewfamilyPageModule', name: 'ViewfamilyPage', segment: 'viewfamily', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcomelogin/welcomelogin.module#WelcomeloginPageModule', name: 'WelcomeloginPage', segment: 'welcomelogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logoutfromnursing/logoutfromnursing.module#LogoutfromnursingPageModule', name: 'LogoutfromnursingPage', segment: 'logoutfromnursing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/familyprofile/familyprofile.module#FamilyprofilePageModule', name: 'FamilyprofilePage', segment: 'familyprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/needscare/needscare.module#NeedscarePageModule', name: 'NeedscarePage', segment: 'needscare', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editmember-profile/editmember-profile.module#EditmemberProfilePageModule', name: 'EditmemberProfilePage', segment: 'editmember-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_13_ionic2_google_places_autocomplete__["a" /* GooglePlacesAutocompleteComponentModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_stripe__["a" /* Stripe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { WelcomeloginPage} from "../pages/welcomelogin/welcomelogin";
import { LoginPage} from "../pages/login/login";
import { SignupPage} from "../pages/signup/signup";
import { TermsusePage} from "../pages/termsuse/termsuse";
import { NursingselectPage} from "../pages/nursingselect/nursingselect";
import { NeedscarePage} from "../pages/needscare/needscare";
import { ServicesPage} from "../pages/services/services";
import { SchedulevisitPage} from "../pages/schedulevisit/schedulevisit";
import { RequesthistoryPage} from "../pages/requesthistory/requesthistory";
import { ScheduledrequestsPage} from "../pages/scheduledrequests/scheduledrequests";
import { AdditionDetailsPage} from "../pages/addition-details/addition-details";
import { NursingPersonalPage} from "../pages/nursing-personal/nursing-personal";
import { PricingplansPage} from "../pages/pricingplans/pricingplans";
import { PaymentMethodPage} from "../pages/payment-method/payment-method";
import { MyplansPage} from "../pages/myplans/myplans";
import { DidyouKnowPage} from "../pages/didyou-know/didyou-know";
import { DiddetailsPage} from "../pages/diddetails/diddetails";
import { SettingsPage} from "../pages/settings/settings";
import { ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import { CompleteRequestPage} from "../pages/complete-request/complete-request";
import { PaymentPage } from '../pages/payment/payment';
import { NursingdemandmapPage } from '../pages/nursingdemandmap/nursingdemandmap';
import { SupplierPage } from '../pages/supplier/supplier';
import { AllservicePage } from '../pages/allservice/allservice';
import { TermsconditionPage} from '../pages/termscondition/termscondition';
import { ShareappPage } from '../pages/shareapp/shareapp';
import { NotificationPage } from '../pages/notification/notification';
import { BothservicesPage } from '../pages/bothservices/bothservices';
import { ChattingPage } from '../pages/chatting/chatting'; */

/* import { CompletePersonalCarePage} from "../pages/complete-personal-care/complete-personal-care";
import { PrivacypolicyPage} from "../pages/privacypolicy/privacypolicy";
import { ServiceCheckPage } from '../pages/service-check/service-check';
import { NursingcareservicesPage} from "../pages/nursingcareservices/nursingcareservices";
import { FaqsPage } from '../pages/faqs/faqs';
import { FaqdetailsPage } from '../pages/faqdetails/faqdetails';
import { PaymentdetailPage} from "../pages/paymentdetail/paymentdetail";
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { FamilyprofilePage } from '../pages/familyprofile/familyprofile';
import { ViewfamilyPage } from '../pages/viewfamily/viewfamily';
import { UpdatePasswordPage } from '../pages/update-password/update-password';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { CancellationPolicyPage } from '../pages/cancellation-policy/cancellation-policy';
import { ContactusPage } from '../pages/contactus/contactus';
import { ThankyouratingPage } from '../pages/thankyourating/thankyourating';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { EditmemberProfilePage } from '../pages/editmember-profile/editmember-profile';
import { EditlocationPage } from '../pages/editlocation/editlocation'; */



var MyApp = /** @class */ (function () {
    function MyApp(platform, geolocation, statusBar, events, splashScreen, fcm, uniqueDeviceID, iab) {
        var _this = this;
        this.platform = platform;
        this.geolocation = geolocation;
        this.statusBar = statusBar;
        this.events = events;
        this.splashScreen = splashScreen;
        this.fcm = fcm;
        this.uniqueDeviceID = uniqueDeviceID;
        this.iab = iab;
        this.defaultPic = "assets/imgs/user_menu.png";
        this.userP = "assets/imgs/user_menu.png";
        this.userName = "Guest user";
        // this.uniqueDeviceID.get()
        // .then((uuid: any) => console.log("udid",uuid))
        // .catch((error: any) => console.log("error",error));
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.events.subscribe('userPic', function (userp) {
            _this.userP = userp;
            console.log("user ka pic", _this.userP);
            localStorage.setItem('pic', _this.userP);
        });
        this.events.subscribe('user_id', function (user_id) {
            _this.user_id = user_id;
            localStorage.setItem('user_id', _this.user_id);
        });
        this.events.subscribe('name', function (u_name) {
            _this.userName = u_name;
            localStorage.setItem('uname', _this.userName);
        });
        this.pages = [
            { title: 'Home', component: 'HomePage' },
            { title: 'List', component: 'ListPage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.fcm.subscribeToTopic('all');
            _this.fcm.getToken()
                .then(function (token) { return console.log("The token is " + token); }) // save the token server-side and use it to push notifications to this device
                .catch(function (error) { return console.error('Error getting token', error); });
            _this.fcm.onNotification().subscribe(function (data) {
                var message = JSON.parse(data.message);
                if (data.wasTapped) {
                    console.log("Received in background");
                    console.log("notification data", data);
                    //let notificationData = data.json();
                    //console.log(notificationData);
                    if (loginUser) {
                        if (message.mobile) {
                            _this.nav.setRoot('NursingdemandmapPage', {
                                "requestData": message.mobile, "request_id": message.request_id,
                                "text": message.body
                            });
                        }
                        else {
                            _this.rootPage = 'NursingselectPage';
                        }
                    }
                    else {
                        _this.rootPage = 'WelcomeloginPage';
                    }
                }
                else if (message && message.mobile) {
                    _this.nav.setRoot('NursingdemandmapPage', {
                        "requestData": message.mobile, "request_id": message.request_id,
                        "text": message.body
                    });
                }
                ;
            });
            _this.fcm.onTokenRefresh().subscribe(function (token) {
                console.log(token);
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        var loginUser = localStorage.getItem('user_id');
        this.userP = localStorage.getItem('pic');
        this.userName = localStorage.getItem('uname');
        if (this.userName == "" || this.userName == undefined) {
            this.userName = "User Name";
        }
        console.log("local images", this.userP);
        this.rootPage = loginUser ? 'NursingselectPage' : 'WelcomeloginPage';
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.hoMe = function () {
        this.nav.setRoot('NursingselectPage');
    };
    MyApp.prototype.requestHist = function () {
        this.nav.setRoot('RequesthistoryPage');
    };
    MyApp.prototype.serviceNurse = function () {
        this.nav.setRoot('BothservicesPage');
    };
    MyApp.prototype.myPlans = function () {
        this.nav.setRoot('MyplansPage');
    };
    MyApp.prototype.pricingPlans = function () {
        this.nav.setRoot('PricingplansPage');
    };
    MyApp.prototype.didKnow = function () {
        this.nav.setRoot('DidyouKnowPage');
    };
    MyApp.prototype.setTings = function () {
        this.nav.setRoot('SettingsPage');
    };
    MyApp.prototype.Logout = function () {
        localStorage.clear();
        this.nav.push('WelcomeloginPage');
    };
    MyApp.prototype.myProfile = function () {
        this.nav.setRoot('EditProfilePage');
    };
    MyApp.prototype.terms = function () {
        this.nav.push('TermsconditionPage');
        //this.openIAB('https://policies.google.com/terms?hl=en');
    };
    MyApp.prototype.privacy = function () {
        this.nav.push('PrivacypolicyPage');
        //this.openIAB('https://policies.google.com/privacy?hl=en-US');
    };
    MyApp.prototype.openIAB = function (url) {
        this.iab.create(url, '_blank', {
            location: 'yes',
            closebuttoncaption: 'Close',
            closebuttoncolor: 'white',
            hardwareback: 'yes',
            hideurlbar: 'yes',
            navigationbuttoncolor: '#2661d7',
            toolbarcolor: '#2661d7'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/app/app.html"*/'\n<ion-menu [content]="content" [swipeEnabled]="false">\n  <ion-content class="bg-sides">\n\n<div class="profile-design">\n   <img src={{userP?userP:defaultPic}} style="    width: 100px;\n   height: 100px;">\n    <ion-icon name="create" menuClose (click)="myProfile()"> </ion-icon>\n    <h3>{{userName}}</h3>\n</div>\n\n      <button menuClose (click)="hoMe()" class="btn"><ion-icon name="home"></ion-icon> Home</button>\n\n      <button menuClose   (click)="requestHist()" class="btn">   <ion-icon name="refresh"></ion-icon> Appointment History </button>\n\n      <button menuClose  (click)="serviceNurse()" class="btn">  <ion-icon name="browsers"></ion-icon> Services </button>\n\n      <!-- <button menuClose   (click)="didKnow()" class="btn">  <ion-icon name="chatbubbles"></ion-icon> Did You Know </button> -->\n\n      <button menuClose  (click)="pricingPlans()" class="btn">  <ion-icon name="pricetags"></ion-icon> Pricing </button>\n\n      <button menuClose  (click)="setTings()" class="btn">  <ion-icon name="settings"></ion-icon> Settings </button>\n\n      <!-- <button menuClose  (click)="myPlans()" class="btn"> <ion-icon name="logo-usd"></ion-icon> My Plans</button> -->\n\n      <button menuClose  (click)="terms()" class="btn"> <ion-icon name="list-box"></ion-icon> Terms & Conditions</button>\n\n      <button menuClose  (click)="privacy()" class="btn"> <ion-icon name="briefcase"></ion-icon> Privacy Policy</button>\n\n      <button menuClose  class="btn" style="border-bottom: 0" (click)="Logout()"> <ion-icon name="log-in"></ion-icon> Logout </button>\n  </ion-content>\n\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n<style>\n    .bg-sides{\n        background-color: #f6f7fb;\n\n    }\n    .profile-design img{\n        display: block;\n        margin:  0 auto;\n        border: 3px solid #177ec0;\n        border-radius: 100%;\n    }\n    .profile-design{\n        padding: 30px;\n        position: relative;\n    }\n    .profile-design  ion-icon{\n        position: absolute;\n        top: 41px;\n        right: 5em;\n        background-color: #177ec0;\n        color: #fff;\n        padding: 6px 7px;\n        border-radius: 100%;\n    }\n    .profile-design h3{\n        text-align: center;\n        font-size: 17px;\n        font-weight: 500;\n        color: #177ec0;\n    }\n    button{\n        width: 100%;\n        padding: 11px 15px;\n        text-align: left;\n        margin-bottom: 8px;\n        background-color: #fff;\n        border-top: 1px solid #ececec;\n        border-bottom: 1px solid #ececec;\n        color: #177ec0;\n        font-size: 14px;\n\n    }\n    button:hover,button:focus{\n        background-color: #177ec0;\n        color: #fff;\n    }\n    button ion-icon{\n        margin-right: 10px;\n        font-size: 23px;\n    }\n</style>'/*ion-inline-end:"/media/dev/34d762b3-5aaa-4010-8e57-6a9c60fa60ed/ionic/nursing/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_unique_device_id__["a" /* UniqueDeviceID */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map