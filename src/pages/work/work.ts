import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AppService } from "../../service/app.service";
import { ProjectDetailPage } from "../projectdetail/projectdetail";
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the WorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage implements OnInit{
  Projects: any[];
  showInternetError:boolean=false;
  ErrorMessage: any;
  btnShowLoaded:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _appservice: AppService,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
  }
   ngOnInit(){
      let loader = this.loadingCtrl.create({
    content: 'Getting latest Projects...',
     duration: 2000,
  });

  loader.present().then(() => {
     this._appservice.getProjects().subscribe(
       proj=> {
         loader.dismiss();
         this.Projects =proj
         this.btnShowLoaded =true;
       },
       error=>{
         this.ErrorMessage = error;
         this.showInternetError = true;
       }
     )
    
  });

   }
  goProjectDetail($event, p){
    this.navCtrl.push(ProjectDetailPage,p);
  }

  MovetoAbout(){
    this.navCtrl.setRoot(AboutPage);
    this.navCtrl.popToRoot();
  }
  MovetoNext(){
    this.navCtrl.push(ContactPage);
  }
}
