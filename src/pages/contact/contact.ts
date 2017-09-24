import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
 rajUrl:string = "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkIAAAAJDI3NTIxZjRjLWM1ZTEtNDUxNC04YWJlLWQ0NTBmZDc5MjIzNw.jpg";
  constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
launchDailer(n:string){
    this.callNumber.callNumber(n, true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
}
}
