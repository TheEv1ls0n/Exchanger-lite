import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UsersService} from '../users.service';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  data: object;
  constructor(private formBuilder: FormBuilder,
              private service: UsersService,
              private firestore: AngularFirestore
              ) { }

  ngOnInit() {
    this.resetForm();
    this.initForm();
  }
  initForm() {
    this.registerForm = this.formBuilder.group({
      firstName: [this.service.user.firstName, [
        Validators.required
      ]],
      lastName: [this.service.user.lastName, [
        Validators.required
      ]],
      email: [this.service.user.email, [
        Validators.required,
        Validators.email
      ]],
      password: [this.service.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18)
      ]]
    });
  }


  resetForm(registerForm?: FormGroup) {
    if (registerForm != null) {
      registerForm.reset();
      }
    this.service.user = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

  }
  onRegisterSubmit(registerForm: FormGroup) {
    this.data = registerForm.value;
    this.firestore.collection('users').add(this.data);
    this.resetForm(registerForm);
    console.warn('Registration Completed');
  }
}


