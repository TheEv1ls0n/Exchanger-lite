import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPartComponent } from './main-part-component/main-part.component';
import { IncomeItemComponent } from './income-item/income-item.component';
import { IncomeTableComponent } from './income-table/income-table.component';
import {IsLoginService} from '../is-login.service';

@NgModule({
  declarations: [
    MainPartComponent,
    IncomeItemComponent,
    IncomeTableComponent
  ],
    imports: [
    CommonModule
  ],
  providers: [
    IsLoginService
  ],
  exports: [
    MainPartComponent
  ]
})
export class MainPartModule { }
