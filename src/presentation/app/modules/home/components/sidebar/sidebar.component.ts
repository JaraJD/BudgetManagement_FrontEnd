import { Component } from '@angular/core';
import { balanceModel } from 'src/domain/models/user-model/balance.model';
import { GetBalanceUseCase } from 'src/domain/usecases/user-usecase/balance-usecase/queries/get-balance.usecase';

@Component({
  selector: 'BudgetApp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  userId : string | null;
  user : string | null = localStorage.getItem('displayName');
  balance : balanceModel[];

  constructor(private balanceGet : GetBalanceUseCase){
    this.userId = localStorage.getItem('uid');
    this.balance = []
  }


  ngOnInit(): void {
    this.balanceGet.execute(this.userId).subscribe({
      next: balance => (this.balance = balance, console.log(balance))
    });
  }

}
