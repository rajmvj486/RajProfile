import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CertiPage } from '../certi/certi';


/**
 * Generated class for the EduPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edu',
  templateUrl: 'edu.html',
})
export class EduPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EduPage');
  }
  MovetoAbout(){
    this.navCtrl.setRoot(AboutPage);
    this.navCtrl.popToRoot();
  }
  MovetoNext(){
    this.navCtrl.push(CertiPage);
  }


}
