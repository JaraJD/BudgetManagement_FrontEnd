import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { GetUserUseCase } from 'src/domain/usecases/user-usecase/get-user.usecase';
import { CreateUserUseCase } from 'src/domain/usecases/user-usecase/create-user.usecase';
import { UserCreateModel } from 'src/domain/models/user-model/user-create.model';
import { UserModel } from 'src/domain/models/user-model/user.model';

@Component({
  selector: 'BudgetApp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuarioForm: FormGroup;
  userid : string | null = '';
  usertocreate : UserCreateModel;
  userDataBase : UserModel;

  constructor(private readonly authService: AuthService,
              private userGet : GetUserUseCase,
              private userCreate: CreateUserUseCase){

    this.userDataBase = {
      userId: "",
      name: "",
      email: "",
      fireBaseId: "",
      isDeleted: false,
    }

    this.usertocreate = {
      name: "",
      email: "",
      fireBaseId: ""
    }

    this.usuarioForm = new FormGroup({
      email: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl<string>('', Validators.required)
    });

  }


  enter(){
    this.authService.SignIn(this.usuarioForm.get('email')?.value, this.usuarioForm.get('password')?.value); 
  }


  auth(): void{
    this.authService.GoogleAuth().then((result) => {
      this.userid = localStorage.getItem('uid');
      this.getUser(this.userid);


    });
    
  }


  getUser(id: string | null){
    this.userGet.execute(id).subscribe({
      next: user => {
        if(user == null){
          this.register()
        }
      },
      error : err => console.log(err),
      complete : () => {console.log(' getUser complete')}
    })
  }


  register(){
    this.usertocreate = {
      name: localStorage.getItem('displayName'),
      email: localStorage.getItem('email'),
      fireBaseId: localStorage.getItem('uid')
    }
    this.userCreate.execute(this.usertocreate).subscribe({
      next: user => {
        console.log(user)
      },
      error: err => console.log(err),
      complete : () => {console.log('register complete')}
    });
  }

}
