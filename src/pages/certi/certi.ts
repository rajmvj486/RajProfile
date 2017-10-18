import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SkillsPage } from '../skills/skills';

/**
 * Generated class for the CertiPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-certi',
  templateUrl: 'certi.html',
})
export class CertiPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CertiPage');
  }
  MovetoAbout(){
    this.navCtrl.setRoot(AboutPage);
    this.navCtrl.popToRoot();
  }
  MovetoNext(){
    this.navCtrl.push(SkillsPage);
  }
}
