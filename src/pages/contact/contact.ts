import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

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
 
  
 constructor(public navCtrl: NavController, public navParams: NavParams,private callNumber: CallNumber,private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
launchDailer(n:string){
    this.callNumber.callNumber(n, true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
  }
  launchLinkedIn(){
    window.open('https://www.linkedin.com/in/rajshekhar-pampad-a3280564/', '_system', 'location=yes');
  }

launchEmail(){
 //  this.emailComposer.addAlias('gmail', 'com.google.android.gm');
      let email = {
        // app: 'gmail',
        to: 'rajmvj486@gmail.com',
        cc: '',
        bcc: [],
        attachments:[],
        subject: 'Rajshekhar Pampad - Professional App',
        body: 'Hi Rajshekhar',
        isHtml: true
      };
     
        //Now we know we can send
        this.emailComposer.open(email);
  
 }
}
