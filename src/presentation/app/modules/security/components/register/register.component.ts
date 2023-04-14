import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCreateModel } from 'src/domain/models/user-model/user-create.model';
import { UserModel } from 'src/domain/models/user-model/user.model';
import { CreateUserUseCase } from 'src/domain/usecases/user-usecase/create-user.usecase';
import { GetUserUseCase } from 'src/domain/usecases/user-usecase/get-user.usecase';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'BudgetApp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  usuarioForm: FormGroup;
  usertocreate : UserCreateModel;

  constructor(private readonly authService: AuthService,
              private userCreate: CreateUserUseCase,
              private userGet : GetUserUseCase,
              private router: Router){
    this.usertocreate = {
      name: "",
      email: "",
      fireBaseId: ""
    }
    this.usuarioForm = new FormGroup({
      user: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl<string>('', [Validators.required, Validators.minLength(1)]),
      password: new FormControl<string>('', Validators.required)
    });
  }

  register(){
    this.authService.SignUp(this.usuarioForm.get('email')?.value, this.usuarioForm.get('password')?.value).then((res) => {
      this.validate(localStorage.getItem('uid'));
    });
    this.router.navigate(["home"]);
  }

  validate(id: string | null){
    this.userGet.execute(id).subscribe({
      next: user => {
        console.log(user)
        if(user == null){
          this.create()
        }
      },
      error : err => console.log(err),
      complete : () => {console.log(' getUser complete')}
    })
  }


  create(){
    this.usertocreate = {
      name: this.usuarioForm.get('user')?.value,
      email: localStorage.getItem('email'),
      fireBaseId: localStorage.getItem('uid')
    }
    console.log(this.usertocreate);
    this.userCreate.execute(this.usertocreate).subscribe({
      next: user => {
        console.log(user)
      },
      error: err => console.log(err),
      complete : () => {console.log('register complete')}
    });
  }
}
