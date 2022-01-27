import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

import { MyApp } from './app.component';
/* import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list'; */

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
import { UserServiceProvider } from '../providers/user-service/user-service';
/* import { MyprofilePage } from '../pages/myprofile/myprofile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile'; */

import { HttpModule } from '@angular/http';
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
import { CallNumber } from '@ionic-native/call-number';
import {Camera} from '@ionic-native/camera';
/* import { ChattingPage } from '../pages/chatting/chatting';
import { CompletePersonalCarePage } from '../pages/complete-personal-care/complete-personal-care'; */
import { Geolocation } from '@ionic-native/geolocation';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';
/* import {PrivacypolicyPage} from "../pages/privacypolicy/privacypolicy";
import { FaqdetailsPage } from '../pages/faqdetails/faqdetails';
import { PaymentdetailPage } from "../pages/paymentdetail/paymentdetail";
import { ThankyouratingPage } from '../pages/thankyourating/thankyourating'; */
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
/* import { EditmemberProfilePage } from '../pages/editmember-profile/editmember-profile'; */
import { GoogleMaps } from '@ionic-native/google-maps';
import { SocialSharing } from '@ionic-native/social-sharing';
/* import { ShareappwithfriendPage } from '../pages/shareappwithfriend/shareappwithfriend';
import { UnableloginPage } from '../pages/unablelogin/unablelogin';
import { NotreceivingemailPage } from '../pages/notreceivingemail/notreceivingemail';
import { LogoutfromnursingPage } from '../pages/logoutfromnursing/logoutfromnursing';
import { UpdateprofilePage } from '../pages/updateprofile/updateprofile';
import { EditlocationPage } from '../pages/editlocation/editlocation'; */
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { SMS } from '@ionic-native/sms';
import { FCM } from '@ionic-native/fcm';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Stripe } from '@ionic-native/stripe';



@NgModule({
  declarations: [
    MyApp,
    /* HomePage,
    ListPage,
      WelcomeloginPage,
      LoginPage,
      SignupPage,
      TermsusePage,
      NursingselectPage,
      NeedscarePage,
      ServicesPage,
      SchedulevisitPage,
      RequesthistoryPage,
      ScheduledrequestsPage,
      AdditionDetailsPage,
      NursingPersonalPage,
      PricingplansPage,
      PaymentMethodPage,
      MyplansPage,
      DidyouKnowPage,
      DiddetailsPage,
      SettingsPage,
      ForgotPasswordPage,
      ServicesInfoPage,
      UpdatePasswordPage,
      ServiceCheckPage,
      RatenursingPage,
      FaqsPage,
      ContactusPage,
      CancellationPolicyPage,
      AboutusPage,
    CompleteRequestPage,
    MyprofilePage,
    EditProfilePage,
    FamilyprofilePage,
    ViewfamilyPage,
    PaymentPage,
    NursingdemandmapPage,
    SupplierPage,
    AllservicePage,
    TermsconditionPage,
    MdpickuplocationPage,
    ShareappPage,
    NotificationPage,
    ElectronicnotesPage,
    BothservicesPage,
    NursingcareservicesPage,
    ChattingPage,
    CompletePersonalCarePage,
      PrivacypolicyPage,
      DiddetailsPage,
      FaqdetailsPage,
      PaymentdetailPage,
      ThankyouratingPage,
      EditmemberProfilePage,
      ShareappwithfriendPage,
      UnableloginPage,
      NotreceivingemailPage,
      LogoutfromnursingPage,
      UpdateprofilePage,
      EditlocationPage */

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
      GooglePlacesAutocompleteComponentModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    /* HomePage,
    ListPage,
      WelcomeloginPage,
      LoginPage,
      SignupPage,
      TermsusePage,
      NursingselectPage,
      NeedscarePage,
      ServicesPage,
      SchedulevisitPage,
      RequesthistoryPage,
      ScheduledrequestsPage,
      AdditionDetailsPage,
      NursingPersonalPage,
      PricingplansPage,
      PaymentMethodPage,
      MyplansPage,
      DidyouKnowPage,
      DiddetailsPage,
      SettingsPage,
      ForgotPasswordPage,
      ServicesInfoPage,
      UpdatePasswordPage,
      ServiceCheckPage,
      RatenursingPage,
      FaqsPage,
      ContactusPage,
      CancellationPolicyPage,
      AboutusPage,
    CompleteRequestPage,
    MyprofilePage,
    EditProfilePage,
    FamilyprofilePage,
    ViewfamilyPage,
    PaymentPage,
    NursingdemandmapPage,
    SupplierPage,
    AllservicePage,
    TermsconditionPage,
    MdpickuplocationPage,
    ShareappPage,
    NotificationPage,
    ElectronicnotesPage,
    BothservicesPage,
    NursingcareservicesPage,
    ChattingPage,
    CompletePersonalCarePage,
    PrivacypolicyPage,
    DiddetailsPage,
    FaqdetailsPage,
      PaymentdetailPage,
      ThankyouratingPage,
      EditmemberProfilePage,
      ShareappwithfriendPage,
      UnableloginPage,
      NotreceivingemailPage,
      LogoutfromnursingPage,
      UpdateprofilePage,
      EditlocationPage */

  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    CallNumber,
    Camera,
    Geolocation,
    Facebook,
      File,
      Transfer,
      FilePath,
      GoogleMaps,
      SocialSharing,
      SMS,
      FCM,
      UniqueDeviceID,
      InAppBrowser,
      Stripe
    
  ]
})
export class AppModule {}
