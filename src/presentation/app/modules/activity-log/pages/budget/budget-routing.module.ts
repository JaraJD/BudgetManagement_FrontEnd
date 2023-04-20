import { RouterModule, Routes } from "@angular/router";
import { BudgetComponent } from "./budget-main/budget.component";
import { NgModule } from "@angular/core";
import { ListBudgetUserComponent } from "./list-budget-user/list-budget-user.component";
import { CreateBudgetComponent } from "./create-budget/create-budget.component";
import { CreateBudgetExpenseComponent } from "./create-budget-expense/create-budget-expense.component";

const routes: Routes = [
    {
      path : '',
      component : BudgetComponent,
      children: [
        {
          path: 'list',
          component: ListBudgetUserComponent
        },
        {
          path: 'create',
          component: CreateBudgetComponent
        },
        {
          path: 'create/BudgetExpense/:id',
          component: CreateBudgetExpenseComponent
        },
        {
          path: 'update/:id/:state',
          component: CreateBudgetComponent
        },
        {
          path: '**',
          redirectTo: 'home'
        }
      ]
    }
  ]
  
  @NgModule({
      imports: [RouterModule.forChild( routes )],
      exports: [RouterModule]
    })
    export class BudgetRoutingModule { }