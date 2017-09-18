import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from "../about/about";

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
slides: Slide[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
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
            description: "Who is he in these Billions!!!",
            image: '/assets/images/Raj.JPG',
          },
          {
            title: "A Techie",
            description:"Techy,Passionate,Live in Present, Learn From Past",
            image: '/assets/images/SharePoint.png',
          },
          {
            title:"SharePoint Consultant",
            description:"Microsoft Certified Professional",
            image: '/assets/images/Microsoft_logo.png',
          }
        ];
}
  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }


}
