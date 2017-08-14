import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from '../../models/user';
import {RegPage} from '../reg/reg';
import { AngularFireAuth } from "angularfire2/auth";
import { LoggedPage } from '../logged/logged';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

user = {} as User;

  constructor(private ac:AlertController,private afAuth:AngularFireAuth,public navCtrl: NavController) {

  }
  presentAlert() {
    let alert = this.ac.create({
      title: 'Email or password is Invaild',
      subTitle: 'please reEnter',
      buttons: ['ok']
    });
    alert.present();
  }

  async login(user:User) {
try {
  const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
if(result.message == "auth/invalid-email") {
  console.log('invaild');
  this.presentAlert();

}else{
  console.log('success');
  this.navCtrl.setRoot(LoggedPage);

}

}
catch(e) {
  this.presentAlert();
  this.user.email = "";
  this.user.password = "";

console.log('errori');
}


  }

  reg() {
    this.navCtrl.push(RegPage);
  }

}
