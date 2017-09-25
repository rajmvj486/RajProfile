import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
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
    private _appservice: AppService,public loadingCtrl: LoadingController) {  
     
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  
     
  }
  
 ngOnInit() {

   let loader = this.loadingCtrl.create({
    content: 'Getting Updated Skills...',
     duration: 3000,
  });

  loader.present().then(() => {
      this._appservice.getSkills().subscribe(
        
        prod =>{
          this.SkillSet = prod;
          loader.dismiss();
        },
        error=>this.ErrorMessage = <any>error
      );
  
  });
  }
 SkillBubble() {
   alert("You tapped on Me");
 }


}
