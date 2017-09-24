import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController,AlertController } from 'ionic-angular';
import { AppService } from "../../service/app.service";
import { Network } from '@ionic-native/network';



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
    private _appservice: AppService,public loadingCtrl: LoadingController,
    private network: Network, public alertCtrl:AlertController) {  
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  
     let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  console.log('network was disconnected :-(');
   let alert = this.alertCtrl.create({
                title: "Connection Status",
                subTitle: "Please connect with Internet to view Updated Skill",
           buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Disagree clicked');

// stop disconnect watch
disconnectSubscription.unsubscribe();
          }
        }]
                  });
            alert.present();
});
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
