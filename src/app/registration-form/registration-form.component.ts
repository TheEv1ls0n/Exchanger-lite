import {Component, OnInit} from '@angular/core';
import { RegisterModel} from '../models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'firstName': [this.user.firstName, [
        Validators.required
        ]],
      'lastName': [this.user.lastName, [
        Validators.required
      ]],
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
  onRegisterSubmit() {
    alert(this.user.lastName + ' ' + this.user.firstName + ' ' + this.user.email + ' ' + this.user.password);
  }
}


