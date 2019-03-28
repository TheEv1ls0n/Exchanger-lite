import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRegistred = true;
  isLoggedIn: boolean;
    handleEvent(value) {
   console.log(value);
}
  }

