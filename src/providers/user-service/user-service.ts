import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://www.air.sideworkapps.com/nursingondemand/webservice/';
//let apiUrl = 'http://192.168.2.110/nursingondemand/index.php/webservice/';
//let apiUrl = 'http://192.168.43.23/nursingondemand/index.php/webservice/';
let stripChargeUrl = 'https://api.stripe.com/v1/charges';
@Injectable()
export class UserServiceProvider {

  constructor(public http: Http) {
    console.log('Hello UserServiceProvider Provider');
  }
  register(registerCred, lat, long, udid) {
    var headers: Headers = new Headers({ 'Accept': 'application/json' }); //'Access-Control-Allow-Origin': '*'
    let options = new RequestOptions({ headers: headers });
    return this.http.get(apiUrl + 'signup?' + '&firstname=' + registerCred.firstName + '&lastname=' + registerCred.lastName + '&email=' + registerCred.email + '&password=' + registerCred.password + '&phone_number=' + registerCred.phone +
      '&date_of_birth=' + registerCred.dob + '&lat=' + lat + '&lon=' + long + '&register_id=' + udid + '&user_type=' + 'USER', options)
      .map(response => response.json());

  }
  login(loginData, lat, long, udid) {
    console.log(loginData)
    var headers: Headers = new Headers({ 'Accept': 'application/json' }); //'Access-Control-Allow-Origin': '*'
    let options = new RequestOptions({ headers: headers });
    return this.http.get(apiUrl + 'login?' + '&email=' + loginData.email + '&password=' + loginData.password + '&lat=' + lat + '&lon=' + long + '&register_id=' + udid + '&user_type=' + 'USER', options)
      .map(response => response.json());

  }

  getvisit_list() {

    return this.http.get(apiUrl + 'visit_list')
      .map(response => response.json());

  }

  whoCares() {
    return this.http.get(apiUrl + 'care_list')
      .map(response => response.json());

  }
  servicesType() {
    return this.http.get(apiUrl + 'service_type_list')
      .map(response => response.json());

  }
  services(service_type_id) {
    console.log('id WS', service_type_id)

    return this.http.get(apiUrl + 'service_list?' + '&service_type_id=' + service_type_id)
      .map(response => response.json());

  }
  getAllNurse(service_id, lat, lon) {
    console.log("my nurse details", service_id, lat, lon)

    return this.http.get(apiUrl + 'get_all_nurse_list?' + 'service_type_id=' + service_id + '&lat=' + lat + '&lon=' + lon)
      .map(response => response.json());

  }

  getPrice(servicesId) {
    return this.http.get(apiUrl + 'get_all_price_list?' + 'service_type_id=' + servicesId)
      .map(response => response.json());
  }

  getRating(user_id, rate) {
    return this.http.get(apiUrl + 'app_rating?' + '&user_id=' + user_id + '&rate=' + rate.rate + '&comment=' + rate.comment)
      .map(response => response.json());

  }

  getfamilyMember(user_id) {
    return this.http.get(apiUrl + 'get_all_family_members_list?' + 'user_id=' + user_id)
      .map(response => response.json());
  }

  updateData(mobile, user_id) {
    console.log("service data", mobile, user_id);
    return this.http.get(apiUrl + 'update_phone_number?' + '&phone_number=' + mobile + '&user_id=' + user_id)
      .map(response => response.json());
  }

  updateAddress(user_id, address, lat , lng) {
    return this.http.get(apiUrl + 'update_address?' + 'user_id=' + user_id + '&address=' + address + '&lat=' + lat + '&lng=' + lng)
      .map(response => response.json());
  }

  priceDetails(pricing_id) {
    return this.http.get(apiUrl + 'price_details?' + 'price_id=' + pricing_id)
      .map(response => response.json());
  }

  fbLogin(fname, lname, fbEmail, fbUserId,fbImg, lat, long) {
    return this.http.get(apiUrl + 'social_login?' + '&firstname=' + fname + '&lastname=' + lname + '&email=' + fbEmail + '&social_id=' + fbUserId + '&image='+ fbImg +'&lat=' + lat + '&lon=' + long)
      .map(response => response.json());
  }

  addNewservice(service_id, service_name) {
    return this.http.get(apiUrl + 'add_new_service?' + 'service_type_id=' + service_id + '&service_name=' + service_name)
      .map(response => response.json());
  }

  request_care(request_data, plan_id) {

    return this.http.get(apiUrl + 'request_care?' + '&user_id=' + request_data.user_id + '&visit_id=' + request_data.visit_id + '&visit_date=' + request_data.visit_date
      + '&visit_time=' + request_data.visit_time + '&care_id=' + request_data.care_id + '&care_person=' + request_data.gender
      + '&medical_facility=' + request_data.medicalfacility + '&doctor_order=' + request_data.docProvidedorder
      + '&needs=' + request_data.needMessage + '&contact_number=' + request_data.contactNumber + '&additional_comments=' + request_data.commentMessage
      + '&authorize_person=' + request_data.authorizeBrhalf + '&service_type_id=' + request_data.service_id
      + '&service_id=' + request_data.servicesNameid + '&contact_address=' + request_data.contactAddress
      + '&plan_id=' + plan_id)
      .map(response => response.json());
  }

  userUpdateprofile(user_id, userData) {
    console.log(user_id, userData)
    return this.http.get(apiUrl + 'user_update?' + '&user_id=' + user_id + '&firstname=' + userData.firstname +
      '&lastname=' + userData.lastname + '&gender=' + userData.gender + '&email=' + userData.email + '&date_of_birth=' + userData.date_of_birth + '&phone_number=' + userData.phone_number +
      '&doctor_email=' + userData.docEmail + '&doctor_name=' + userData.docName + '&doctor_phone_number=' + userData.docMobile)
      .map(response => response.json());
  }

  addFamily(user_id, value) {
    return this.http.get(apiUrl + 'add_family_members?' + '&user_id=' + user_id + '&firstname=' + value.firstname +
      '&lastname=' + value.lastname + '&gender=' + value.gender + '&email=' + value.email + '&phone_number=' + value.mobile + '&doctor_name=' + value.docName + '&date_of_birth=' + value.dob
      + '&doctor_email=' + value.docEmail + '&doctor_phone_number=' + value.docMobile + '&relation=' + value.relation)
      .map(response => response.json());
  }

  getMemberProfile(memberId) {
    return this.http.get(apiUrl + 'get_member_profile?' + 'member_id=' + memberId)
      .map(response => response.json());
  }
  updateFamilymember(memberId, memberdata) {
    return this.http.get(apiUrl + 'update_family_members?' + 'member_id=' + memberId + '&relation=' + memberdata.relation
      + '&firstname=' + memberdata.firstname + '&lastname=' + memberdata.lastname + '&gender=' + memberdata.gender
      + '&date_of_birth=' + memberdata.dob + '&email=' + memberdata.email + '&phone_number=' + memberdata.mobile
      + '&doctor_name=' + memberdata.docName + '&doctor_email=' + memberdata.docEmail + '&doctor_phone_number=' + memberdata.docMobile)
      .map(response => response.json());
  }

  priceList(service_id) {
    return this.http.get(apiUrl + 'get_all_price_list_by_service_type?' + 'service_type_id=' + service_id)
      .map(response => response.json());
  }

  getAllpriceList() {
    return this.http.get(apiUrl + 'get_all_price_list')
      .map(response => response.json());
  }

  getAllPriceListDaily() {
    return this.http.get(apiUrl + 'get_all_price_list_daily')
      .map(response => response.json());
  }

  getAllblog() {
    return this.http.get(apiUrl + 'get_all_blog_list')
      .map(response => response.json());
  }

  blogDescription(blog_id) {
    return this.http.get(apiUrl + 'get_blog_details?' + 'blog_id=' + blog_id)
      .map(response => response.json());
  }

  contactUs(value, user_id) {
    return this.http.get(apiUrl + 'contact_us?' + '&user_id=' + user_id + '&name=' + value.name +
      '&email=' + value.email + '&message=' + value.message)
      .map(response => response.json());
  }


  cancelRequest(requestId) {
    return this.http.get(apiUrl + 'request_cancel?' + 'request_id=' + requestId)
      .map(response => response.json());
  }

  requestDetails(requestId) {
    return this.http.get(apiUrl + 'request_details?' + 'request_id=' + requestId)
      .map(response => response.json());
  }

  getprofile(user_id) {
    return this.http.get(apiUrl + 'get_profile?' + '&user_id=' + user_id)
      .map(response => response.json());
  }

  forgotPassword(email_id) {
    return this.http.get(apiUrl + 'forgot_password?' + 'email=' + email_id)
      .map(response => response.json());
  }

  authorizePerson(user_id, authorizeData) {
    return this.http.get(apiUrl + 'add_authorize_person?' + 'user_id=' + user_id + '&person_name=' + authorizeData.person_name
      + '&person_email=' + authorizeData.person_email + '&person_phonenumber=' + authorizeData.person_mobile)
      .map(response => response.json());
  }

  updatePassword(user_id, value) {
    return this.http.get(apiUrl + 'change_password?' + 'user_id=' + user_id + '&old_password=' + value.oldpwd + '&password=' + value.newpwd)
      .map(response => response.json());
  }

  purchasedPlan(user_id) {
    return this.http.get(apiUrl + 'get_purchased_plan_lists?' + 'user_id=' + user_id)
      .map(response => response.json());
  }
  getRequestHistory(user_id) {
    console.log("user id", user_id)
    return this.http.get(apiUrl + 'get_all_request_list?' + 'user_id=' + user_id)
      .map(response => response.json());
  }

  updateDoctor(drData) {

    return this.http.get(apiUrl + 'update_doctor_info?' + 'user_id=' + drData.user_id + '&doctor_name=' + drData.drname
      + '&doctor_email=' + drData.dremail + '&doctor_phone_number=' + drData.drphone)
      .map(response => response.json());
  }

  paytoStripe(data) {
    var stripeAuthHeader = new Headers();
    stripeAuthHeader.append('Content-Type', 'application/x-www-form-urlencoded');
    //stripeAuthHeader.append("Authorization", 'Bearer rk_test_JcrSWoYEhqQfftIEEvPLdirP009hIdQa6s');
    stripeAuthHeader.append("Authorization", 'Bearer rk_live_CYk5AXU16GvNqYVVwEflNCA300FTLUMiaP');
    return this.http.post(stripChargeUrl, data, new RequestOptions({ headers: stripeAuthHeader }))
      .map(response => response.json());
  }

  get_current_request(user_id){
    return this.http.get(apiUrl + 'get_current_request?' + 'user_id=' + user_id)
    .map(response => response.json());
  }

  getUserSubscription(user_id){
    return this.http.get(apiUrl + 'get_user_subscription?' + 'user_id=' + user_id)
    .map(response => response.json());
  }

}
