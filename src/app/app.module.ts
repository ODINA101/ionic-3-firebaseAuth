import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { firebaseConfig } from './app.firebase.config';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireModule } from 'angularfire2';
import { RegPage } from '../pages/reg/reg';
import {AngularFireAuthModule } from 'angularfire2/auth';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
