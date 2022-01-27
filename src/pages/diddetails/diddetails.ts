import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service'; 

/**
 * Generated class for the DiddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diddetails',
  templateUrl: 'diddetails.html',
})
export class DiddetailsPage {
  public blog_id:any;
  public blogList:any;
  public blog_name:any;
  public blog_date:any;
  public blog_dec:any;
  public postList:any=[];
  public post_img:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userService:UserServiceProvider,public loadingCtrl: LoadingController) {
    this.blog_id = this.navParams.get('blog_id');
    console.log(this.blog_id);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.userService.blogDescription(this.blog_id).subscribe(res=>{
     
     this.blogList = res.result;
     console.log(this.blogList);
      loading.dismiss();
      this.blog_name = this.blogList.blog_name;
      this.blog_date = this.blogList.created_date;
      this.blog_dec = this.blogList.blog_description;
      this.postList = this.blogList.description;
      this.post_img = this.blogList.blog_image;
      console.log(this.postList);


    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiddetailsPage');
  }

}
