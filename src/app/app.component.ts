import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRegistred = true;
  actionText = 'Sign Up';
  actionChanging = () => {
    if (this.isRegistred) {
    this.actionText = 'Sign Up';
    } else {
      this.actionText = 'Log In';
    }
    return this.actionText;
  }
  }

