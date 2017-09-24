import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EduPage } from "../edu/edu";

/**
 * Generated class for the ProsummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-prosummary',
  templateUrl: 'prosummary.html',
})
export class ProsummaryPage {

  proSummary:Array<{title:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.proSummary=[
      {title:' Microsoft Certified SharePoint Developer with 4 Years of IT experience in different phases of SDLC including Analysis, Design, Development, Test, Support and Maintenance.'},
      {title:'Good Working knowledge about out of the box features of SharePoint 2013/2010 and hands on experience in customizing them to meet the business need.'},
      {title:'Strong experience with developing Apps using SharePoint 2013 (on cloud), Custom web parts, User Controls, Event Receivers, Application Page, Sandbox and Farm Solution Packaging and deployments of solution.'},
      {title:'Worked on .NET Frameworks 3.5/4.0, SharePoint Object Model, Client Object Model and Customization using SharePoint Designer 2010/2013.'},
      {title:'Good Working knowledge and hands-on experience in installation, configuration, customization, designing, administering and managing SharePoint 2010/2013'},
      {title:'Worked on Provided Hosted App , SharePoint Hosted App and Remote Event Receiver.'},
      {title:'Mentoring juniors on SharePoint 2013/Office 365/App Model, Bootstrap 3,TypeScript'},
      {title:'Skilled in mapping requirements, translating into functional specifications & designing customized solutions.'},
      {title:'Proficient in reviewing the Design Documents, Code changes and Project Plans & maintaining the User Documents of various projects'},
      {title:'Quick Learner – Radiply assimilate into organization and aggressively apply new ideas, concepts, methods and technologies to support business objectives. Thrive in both independent and collabrative work environment.'}
    ];
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProsummaryPage');
  }
  MovetoNext(){
    this.navCtrl.push(EduPage);
  }

}
