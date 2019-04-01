import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MainPartModule} from './main-part/main-part.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponentComponent } from './login/login-component.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {UsersService} from './users.service';
import {IsLoginService} from './is-login.service';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MainPartModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [UsersService, IsLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
