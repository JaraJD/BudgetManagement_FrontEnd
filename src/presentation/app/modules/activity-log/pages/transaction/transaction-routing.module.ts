import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TransactionComponent } from "./transaction-main/transaction.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { CreateComponent } from "./create/create.component";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { ListTypeComponent } from "./list-type/list-type.component";
import { ListDateComponent } from "./list-date/list-date.component";
import { UpdateTransactionComponent } from "./update-transaction/update-transaction.component";

const routes: Routes = [
    {
      path : '',
      component : TransactionComponent,
      children: [
        {
          path: 'update',
          component: UpdateTransactionComponent
        },
        {
          path: 'listCategory',
          component: ListCategoryComponent
        },
        {
          path: 'listType',
          component: ListTypeComponent
        },
        {
          path: 'listDate',
          component: ListDateComponent
        },
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