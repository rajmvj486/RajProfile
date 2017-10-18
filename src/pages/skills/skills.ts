import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { AppService } from "../../service/app.service";
import{AboutPage} from "../about/about";
import { WorkPage } from '../work/work';



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
  showInternetError: boolean = false;
  btnShowLoaded: boolean = false;

 SkillSet:Array<{title:string, skills:string[]}>;
 Skills:any;
 ErrorMessage:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _appservice: AppService,public loadingCtrl: LoadingController) {  
     
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  
     
  }
  MovetoAbout(){
    this.navCtrl.setRoot(AboutPage);
    this.navCtrl.popToRoot();
  }  
 ngOnInit() {

   let loader = this.loadingCtrl.create({
    content: 'Getting Updated Skills...',
     duration: 2000,
  });

  loader.present().then(() => {
      this._appservice.getSkills().subscribe(
        
        prod =>{
          this.SkillSet = prod;
          loader.dismiss();
         this.btnShowLoaded = true;
        },
        error=>{
          this.ErrorMessage = <any>error;
          this.showInternetError = true;        
        }
      );
  
  });
  }
  
  MovetoNext(){
    this.navCtrl.push(WorkPage);
  }


}
