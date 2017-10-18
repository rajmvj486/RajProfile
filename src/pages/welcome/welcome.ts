import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { AboutPage } from "../about/about";
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage implements OnInit {
  showSkip: boolean =true;
  splash = true;
slides: Slide[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public _SplashScreen: SplashScreen, public platform:Platform) {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this._SplashScreen.hide();
      }, 100);
    });
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  
    startApp() {
    this.navCtrl.setRoot(AboutPage, {}, {
      animate: true,
      direction: 'forward'
    });
  }
ngOnInit(){
 this.slides = [
          {
            title: "Rajshekhar Pampad",
            description: "Who is he !!!",
            image: './assets/images/Raj.JPG',
          },
          {
            title: "A Techie",
            description:"Passionate About New Technology",
            image: './assets/images/Raj.JPG',
          },
          {
            title:"SharePoint Consultant",
            description:"Microsoft Certified Professional",
            image: './assets/images/Raj.JPG',
          }
        ];
}
  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }


}
