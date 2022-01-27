import { Component, ViewChild } from '@angular/core';
import { Events, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
import { Geolocation } from '@ionic-native/geolocation';
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
import { FCM } from '@ionic-native/fcm';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
declare  var google;


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any;
  
    public user_id:any;
    public defaultPic:any="assets/imgs/user_menu.png";
    public userP="assets/imgs/user_menu.png";
    public userName="Guest user";



  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public geolocation: Geolocation,
              public statusBar: StatusBar,
              public events:Events,
              public splashScreen: SplashScreen,
              public  fcm: FCM,
              private uniqueDeviceID: UniqueDeviceID,
              private iab: InAppBrowser) {
                // this.uniqueDeviceID.get()
                // .then((uuid: any) => console.log("udid",uuid))
                // .catch((error: any) => console.log("error",error));
    this.initializeApp();

    // used for an example of ngFor and navigation

    this.events.subscribe('userPic',(userp)=>{

      
        this.userP = userp;
        console.log("user ka pic",this.userP);
        localStorage.setItem('pic',this.userP);

    })

      this.events.subscribe('user_id', (user_id) => {

          this.user_id = user_id
          localStorage.setItem('user_id',this.user_id);


      });

      this.events.subscribe('name',(u_name)=>{
          this.userName = u_name;
          localStorage.setItem('uname',this.userName);

      })
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'List', component: 'ListPage' }
    ];

  }

  initializeApp() {

    this.platform.ready().then(() => {
        this.fcm.subscribeToTopic('all');
        this.fcm.getToken()
        .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
        .catch(error => console.error('Error getting token', error));
  
  
        this.fcm.onNotification().subscribe(data=>{
          let message = JSON.parse(data.message)
          if(data.wasTapped){
            console.log("Received in background");
            console.log("notification data",data)
            //let notificationData = data.json();
            //console.log(notificationData);
            if(loginUser){
              if(message.mobile){
                this.nav.setRoot('NursingdemandmapPage', {
                  "requestData":message.mobile, "request_id":message.request_id,
                  "text":message.body
                });
              }
              else{
                this.rootPage = 'NursingselectPage';
              }
            }
            else{
              this.rootPage = 'WelcomeloginPage';
            }
          } else if(message && message.mobile){
            this.nav.setRoot('NursingdemandmapPage', {
              "requestData":message.mobile, "request_id":message.request_id,
              "text":message.body
            });
          };
        })
        this.fcm.onTokenRefresh().subscribe(token=>{
          console.log(token);
        });

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
   
    });

      let  loginUser = localStorage.getItem('user_id');
      this.userP = localStorage.getItem('pic');
      this.userName = localStorage.getItem('uname');
      if(this.userName == "" || this.userName==undefined){
          this.userName = "User Name";
      }
      console.log("local images",this.userP);
      this.rootPage = loginUser?'NursingselectPage':'WelcomeloginPage';
  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
    hoMe(){
        this.nav.setRoot('NursingselectPage');
    }
    requestHist(){
        this.nav.setRoot('RequesthistoryPage');
    }
    serviceNurse(){
        this.nav.setRoot('BothservicesPage');
    }
    myPlans(){
        this.nav.setRoot('MyplansPage');
    }
    pricingPlans(){
        this.nav.setRoot('PricingplansPage');
    }
    didKnow(){
        this.nav.setRoot('DidyouKnowPage');
    }

    setTings(){
        this.nav.setRoot('SettingsPage');
    }

    Logout(){
        localStorage.clear();
        this.nav.push('WelcomeloginPage');
    }
    myProfile(){
        this.nav.setRoot('EditProfilePage');
    }

    terms(){
      this.nav.push('TermsconditionPage');
      //this.openIAB('https://policies.google.com/terms?hl=en');
    }

    privacy(){
      this.nav.push('PrivacypolicyPage');
      //this.openIAB('https://policies.google.com/privacy?hl=en-US');
    }

    openIAB(url){
      this.iab.create(url,'_blank',{
        location:'yes',
        closebuttoncaption:'Close',
        closebuttoncolor:'white',
        hardwareback:'yes',
        hideurlbar: 'yes',
        navigationbuttoncolor:'#2661d7',
        toolbarcolor:'#2661d7'
      });


    }
}

