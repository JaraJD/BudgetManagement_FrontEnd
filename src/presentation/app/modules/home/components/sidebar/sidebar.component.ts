import { Component } from '@angular/core';

@Component({
  selector: 'BudgetApp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  user : string | null = localStorage.getItem('displayName');

}
