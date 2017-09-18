import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Media } from '@ionic-native/media';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from "../pages/about/about";
import { CertiPage } from "../pages/certi/certi";
import { SkillsPage } from "../pages/skills/skills";
import { WorkPage } from "../pages/work/work";
import { ContactPage } from "../pages/contact/contact";
import { EduPage } from "../pages/edu/edu";
import { ProjectDetailPage } from "../pages/projectdetail/projectdetail";
import { ProsummaryPage } from "../pages/prosummary/prosummary";
import { WelcomePage } from "../pages/welcome/welcome";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    EduPage,
    CertiPage,
    SkillsPage,
    WelcomePage,
    ProsummaryPage,
    ProjectDetailPage,
WorkPage,
ContactPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AboutPage,
    EduPage,
    WelcomePage,
    CertiPage,
    SkillsPage,
    WorkPage,
    ProsummaryPage,
    ProjectDetailPage,
    ContactPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
