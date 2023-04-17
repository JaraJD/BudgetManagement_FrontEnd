import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMainComponent } from './activity-main.component';

describe('ActivityMainComponent', () => {
  let component: ActivityMainComponent;
  let fixture: ComponentFixture<ActivityMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

      // Tests that an instance of ActivityMainComponent can be created. 
      it("test_creating_instance", () => {
        // Arrange
        const activityMainComponent = new ActivityMainComponent();

        // Act

        // Assert
        expect(activityMainComponent).toBeDefined();
    });
});
