import {Component} from '@angular/core';
import {IsLoginService} from './is-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logInService: IsLoginService) { }

  isRegistred = true;
  }

