import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NewTaskModalPage } from './new-task-modal/new-task-modal.page';

//Para Google Maps
import { AgmCoreModule } from '@agm/core';

//Para NFC
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [AppComponent],
  // declarations: [AppComponent, NewTaskModalPage],
  // entryComponents: [NewTaskModalPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'ios'
   }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app
    AngularFirestoreModule, // imports firebase/firestore
    AngularFireAuthModule, // imports firebase/auth
    AngularFireStorageModule, // imports firebase/storage
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAsItvwpqZuZQcbDyM6Dy2cu_3Hoo_V1_I' // Api Key para Google Maps
    }),
    NgxQRCodeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    WebView,
    { provide: FirestoreSettingsToken, useValue: {} },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NFC, Ndef
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
