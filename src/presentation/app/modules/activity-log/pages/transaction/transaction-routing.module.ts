import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TransactionComponent } from "./transaction.component";
import { ListUserComponent } from "../../components/transaction/list-user/list-user.component";

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
          path: '**',
          redirectTo: 'budget'
        }
      ]
    }
  ]
  
  @NgModule({
      imports: [RouterModule.forChild( routes )],
      exports: [RouterModule]
    })
    export class TransactionRoutingModule { }