import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})


export class AboutPage {
   //nativePath:string;
 file: MediaObject;
  proSummary:Array<{title:string}>;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,private media: Media) {
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
    console.log('ionViewDidLoad AboutPage');
   console.log(Media);
  }
   
//   MusicPlay(){
//     this.fileChooser.open()
//   .then(uri => {
//     console.log(uri);    
// this.filePath.resolveNativePath(uri)
//   .then(filePath => {
//     this.nativePath = filePath;
//     this.AudioPlay();
//    })
//   .catch(err => console.log(err));
//   })
//   .catch(e => console.log(e));
//   }
   AudioPlay(){
     
    // this.pathAlone = this.nativePath.substring(8);
    this.file  = this.media.create('./assets/audio/Audio1.mp3');  
    this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

    this.file.onSuccess.subscribe(() => console.log('Action is successful'));

    this.file.onError.subscribe(error => console.log('Error!', error));

// play the file
    this.file.play();

    
   }

}
  