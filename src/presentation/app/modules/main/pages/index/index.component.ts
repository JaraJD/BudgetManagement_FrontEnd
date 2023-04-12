import { Component } from '@angular/core';
import { UserCreateModel } from 'src/domain/models/user-model/user-create.model';
import { CreateUserUseCase } from 'src/domain/usecases/create-user.usecase';
import { GetUserUseCase } from 'src/domain/usecases/get-user.usecase';

@Component({
  selector: 'BudgetApp-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  userToCreate : UserCreateModel = {
    name : "pruebaFront",
    email : "prueba@prueba.com",
    fireBaseId : "priebaId"
  }


  constructor(private userCreate: CreateUserUseCase, private userGet : GetUserUseCase){}

  crateUser(){
    this.userCreate.execute(this.userToCreate).subscribe((res) => console.log(res))
  }

  getUser(){
    this.userGet.execute("aattrr").subscribe((res) => console.log(res))
  }

}
