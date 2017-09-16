import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-projectdetail',
  templateUrl: 'projectdetail.html',
})
export class ProjectDetailPage implements OnInit {
    Project: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailPage');
  }
 ngOnInit(){
      this.Project = this.navParams.data;
    console.log(this.Project);
    
 }    
}


