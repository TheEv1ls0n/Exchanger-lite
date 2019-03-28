import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MainPartModule} from './main-part/main-part.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponentComponent } from './login/login-component.component';

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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
