import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { IncomeItemComponent} from '../income-item/income-item.component';

@Component({
  selector: 'app-main-part',
  templateUrl: './main-part.component.html',
  styleUrls: ['./main-part.component.css']
})
export class MainPartComponent implements OnInit {
  isLoggedIn: boolean;
  @Output() onChanged: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSignOutClick() {
    return this.isLoggedIn = false;
  }
  sendEventValue() {
    this.onChanged.emit(this.isLoggedIn);
  }
  onLoggedInToggle() {
    this.onSignOutClick();
    this.sendEventValue();
    console.log(this.isLoggedIn);
  }
}
