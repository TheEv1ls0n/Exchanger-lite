import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../models/login.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

constructor(private formBuilder: FormBuilder) { }

ngOnInit() {
  this.loginForm= this.formBuilder.group({
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
  alert(this.user.email + ' ' + this.user.password);
}
}
