import { RouterModule, Routes } from "@angular/router";
import { BudgetComponent } from "./budget-main/budget.component";
import { NgModule } from "@angular/core";
import { ListBudgetUserComponent } from "./list-budget-user/list-budget-user.component";
import { CreateBudgetComponent } from "./create-budget/create-budget.component";

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