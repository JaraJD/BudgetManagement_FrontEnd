import { Component } from '@angular/core';
import { GetUserUseCase } from 'src/domain/usecases/get-user.usecase';

@Component({
  selector: 'BudgetApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BudgetManagement';

  constructor(private user: GetUserUseCase){}

  getUser(){
    this.user.execute("aattrr").subscribe((res) => console.log(res))
  }
}
