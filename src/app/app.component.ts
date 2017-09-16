import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from "../pages/about/about";
import { CertiPage } from "../pages/certi/certi";
import { SkillsPage } from "../pages/skills/skills";
import { WorkPage } from "../pages/work/work";
import { ContactPage } from "../pages/contact/contact";
import { EduPage } from "../pages/edu/edu";
import { AppService } from "../service/app.service";

@Component({
  templateUrl: 'app.html',
  providers:[AppService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rajUrl:string ="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkIAAAAJDI3NTIxZjRjLWM1ZTEtNDUxNC04YWJlLWQ0NTBmZDc5MjIzNw.jpg";
  rajTitle:string="Raj";
  imageWidth:number=200;
  imageMargin:number=2;
  rootPage: any = AboutPage;

  pages: Array<{title: string, component: any, iconName:string,color:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About Me', component: AboutPage, iconName: 'user-circle',color:'faBlack' },
      { title: 'Education', component: EduPage, iconName:'graduation-cap',color:'faBlack' },
      { title: 'Certification', component: CertiPage, iconName:'certificate',color:'faOrange'},
      { title: 'Skills', component: SkillsPage,iconName:'laptop',color:'faBlack' },
      { title: 'Projects', component: WorkPage,iconName:'suitcase',color:'faBlack' },
      { title: 'Contact Me', component: ContactPage,iconName:'phone-square',color:'faBlack' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
