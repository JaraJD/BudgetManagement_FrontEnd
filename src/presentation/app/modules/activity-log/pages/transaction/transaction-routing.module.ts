import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TransactionComponent } from "./transaction-main/transaction.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
    {
      path : '',
      component : TransactionComponent,
      children: [
        {
          path: 'list',
          component: ListUserComponent
        },
        {
          path: 'create',
          component: CreateComponent
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
    export class TransactionRoutingModule { }