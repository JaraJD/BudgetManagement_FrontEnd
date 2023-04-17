import { Component } from '@angular/core';
import { GetUserUseCase } from 'src/domain/usecases/user-usecase/get-user.usecase';

@Component({
  selector: 'BudgetApp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BudgetManagement';


}
