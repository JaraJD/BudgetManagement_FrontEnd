import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBudgetComponent } from './list-budget.component';
import { BudgetModel } from 'src/domain/models/activity-log-model/budget-model/queries/budget.model';

describe('ListBudgetComponent', () => {
  let component: ListBudgetComponent;
  let fixture: ComponentFixture<ListBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
       // Verifies that the budgets property can be set with an empty array.  
       it("test_set_budgets_property_with_empty_array", () => {
        // Arrange
        const component = new ListBudgetComponent();
        const budgets : BudgetModel[] = [];

        // Act
        component.budgets = budgets;

        // Assert
        expect(component.budgets).toEqual(budgets);
    });
});
