import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {LoginComponentComponent} from './login/login-component.component';
import {MainPartComponent} from './main-part/main-part-component/main-part.component';


const routes: Routes = [
  { path: '',
    redirectTo: 'SignUp',
    pathMatch: 'full'
  },
  { path: 'SignUp',
    component: RegistrationFormComponent },
  {path: 'LogIn',
    component: LoginComponentComponent },
  {path: 'LoggedIn',
    component: MainPartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
