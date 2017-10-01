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
rajUrl:string="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkIAAAAJDI3NTIxZjRjLWM1ZTEtNDUxNC04YWJlLWQ0NTBmZDc5MjIzNw.jpg";
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
