import { Component, OnInit } from '@angular/core';
import {IncomeModel} from '../../models/Income.model';
import {CurrencyModel} from '../../models/currency.model';

@Component({
  selector: 'app-income-table',
  templateUrl: './income-table.component.html',
  styleUrls: ['./income-table.component.css']
})
export class IncomeTableComponent implements OnInit {
  // tableItem = new IncomeModel();
  // tableItems = ['First Item', 'Second Item'];
  onShowDropdown = false;
  currency: CurrencyModel[] = [
    {id: 1, name: '€'},
    {id: 2, name: 'MDL'}];
  constructor() { }

  ngOnInit() {
  }

  // onCreateTableItem() {
  //   this.tableItems.push(this.tableItem.sourceIncome);
  // }

}
