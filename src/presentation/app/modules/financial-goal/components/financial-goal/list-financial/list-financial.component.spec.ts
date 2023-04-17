import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFinancialComponent } from './list-financial.component';

describe('ListFinancialComponent', () => {
  let component: ListFinancialComponent;
  let fixture: ComponentFixture<ListFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFinancialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
