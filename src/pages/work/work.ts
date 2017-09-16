import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AppService } from "../../service/app.service";
import { ProjectDetailPage } from "../projectdetail/projectdetail";

/**
 * Generated class for the WorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage implements OnInit{
  Projects: any[];
  ErrorMessage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private _appservice: AppService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
  }
   ngOnInit(){
     this._appservice.getProjects().subscribe(
       proj=> this.Projects =proj,
       error=>this.ErrorMessage = error
     )
   }
  goProjectDetail($event, p){
    this.navCtrl.push(ProjectDetailPage,p);
  }
}
