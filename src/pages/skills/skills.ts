import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppService } from "../../service/app.service";


/**
 * Generated class for the SkillsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage implements OnInit {
 
 SkillSet:Array<{title:string, skills:string}>;
 Skills:any;
 ErrorMessage:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private _appservice: AppService) {  
    this.SkillSet=[
      {title:"Core", skills:'ASP.NET 3.5/4.0/4.5, C#, ASP.NET MVC , Web Api, SharePoint 2013/2010,Office 365'},
    {title:"Web Technologies", skills:' Object Oriented Java Script, HTML, XHTML, XML, CSS, JQuery, AJAX, JSON, Angular Js, Bootstrap 3, CSOM, JSOM, Angular 2,TypeScript'},
    {title:"Web Services",skills:' SIEBEL, SOAP, REST API'},
    {title:"Database",skills:'Database	SQL server 2008/2012, Oracle'},
    {title:"Tools",skills:'SharePoint Designer 2010/2013, Nintex Workflow, Visual Studio 2010/2012/2013, Style cop, Re-sharper'},
    {title:"Version Control Tool",skills:'SVN,TFS'},
    {title:"Bug Tracking Tool",skills:'JIRA,CISM'}
    ];  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }
 ngOnInit() {
      this._appservice.getSkills().subscribe(
        prod =>this.Skills = prod,
        error=>this.ErrorMessage = <any>error
      );
  }
 SkillBubble() {
   alert("You tapped on Me");
 }
}
