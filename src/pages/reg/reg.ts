import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../models/user';
import { HomePage } from '../home/home';
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html',
})
export class RegPage {
user = {} as User;
  constructor(private afAuth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }


async reg(user:User) {
  try {
const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
console.log(result);
this.navCtrl.setRoot(HomePage);

  }
  catch(e) {
    console.error(e);
  }
}
login() {
  this.navCtrl.setRoot(HomePage);
}



  ionViewDidLoad() {
  }

}
