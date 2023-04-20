import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FinancialMainComponent } from "./pages/financial-main/financial-main.component";
import { ListFinancialUserComponent } from "./pages/list-financial-user/list-financial-user.component";
import { CreateFinancialComponent } from "./pages/create-financial/create-financial.component";

const routes: Routes = [
  {
    path : '',
    component : FinancialMainComponent,
    children: [
      {
        path: 'list',
        component: ListFinancialUserComponent
      },
      {
        path: 'create',
        component: CreateFinancialComponent
      },
      {
        path: 'update/:id/:state',
        component: CreateFinancialComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class FinancialGoalRoutingModule { }