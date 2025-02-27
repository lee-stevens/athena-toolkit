import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevDashboardComponent } from './dev-dashboard.component';

describe('DevDashboardComponent', () => {
  let component: DevDashboardComponent;
  let fixture: ComponentFixture<DevDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DevDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
