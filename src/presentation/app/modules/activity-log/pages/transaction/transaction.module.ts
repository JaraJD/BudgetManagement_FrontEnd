import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from '../../components/transaction/list/list.component';
import { FormatDatePipe } from '../../pipes/format-date/format-date.pipe';
import { BudgetRoutingModule } from '../budget/budget-routing.module';



@NgModule({
  declarations: [
    ListUserComponent,
    CreateComponent,
    ListComponent,
    FormatDatePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionRoutingModule,
    BudgetRoutingModule
  ]
})
export class TransactionModule { }
