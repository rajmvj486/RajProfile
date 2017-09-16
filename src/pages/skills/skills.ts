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
 
 SkillSet:Array<{title:string, skills:string[]}>;
 Skills:any;
 ErrorMessage:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _appservice: AppService) {  
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }
 ngOnInit() {
      this._appservice.getSkills().subscribe(
        prod =>this.SkillSet = prod,
        error=>this.ErrorMessage = <any>error
      );
  }
 SkillBubble() {
   alert("You tapped on Me");
 }
}
