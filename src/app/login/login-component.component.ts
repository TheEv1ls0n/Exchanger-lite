import {Component, OnInit} from '@angular/core';
import {LoginModel} from '../models/login.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UsersService} from '../users.service';
import {RegisterModel} from '../models/register.model';
import {IsLoginService} from '../is-login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
user: LoginModel = new LoginModel();
loginForm: FormGroup;
hide = true;
projectTitle = 'Cash Exchanger';

list: RegisterModel[];
constructor(private formBuilder: FormBuilder,
            private usersService: UsersService,
            private logInService: IsLoginService) {}

ngOnInit() {
  this.usersService.getUsers().subscribe(actionArray => {
    this.list = actionArray.map(item => {
      return {
        id: item.payload.doc.id,
        ...item.payload.doc.data()
      } as RegisterModel;
    });
    }
  );
  this.initLoginForm();
  console.log(this.list);
}

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18)
      ]]
    });
  }

onLoginSubmit() {
  alert(this.user.email + ' ' + this.user.password );
}


}
