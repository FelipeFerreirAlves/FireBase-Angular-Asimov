import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import {initializeApp,provideFirebaseApp} from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import {provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService} from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import {provideFirestore,getFirestore} from '@angular/fire/firestore';
import {provideStorage,getStorage} from '@angular/fire/storage';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';





@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
