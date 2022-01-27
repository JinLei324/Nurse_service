import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {DiddetailsPage} from "../diddetails/diddetails";
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the DidyouKnowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-didyou-know',
  templateUrl: 'didyou-know.html',
})
export class DidyouKnowPage {
  public blogList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userService: UserServiceProvider) {
    this.userService.getAllblog().subscribe(res=>{
      this.blogList = res.result;
      console.log(this.blogList);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DidyouKnowPage');
  }
    diddetails(blogid){
      console.log(blogid)
    this.navCtrl.setRoot('DiddetailsPage',{'blog_id':blogid});
    }

}
