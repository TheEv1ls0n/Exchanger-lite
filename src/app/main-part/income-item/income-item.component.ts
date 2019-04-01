import { Component, OnInit } from '@angular/core';
import { IncomeModel } from '../../models/Income.model';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.css']
})
export class IncomeItemComponent implements OnInit {
  incomeItem: IncomeModel = new IncomeModel();

  constructor() { }

  ngOnInit() {
  }

}
