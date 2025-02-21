import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeChartsComponent } from './prime-charts.component';

describe('ChartsComponent', () => {
  let component: PrimeChartsComponent;
  let fixture: ComponentFixture<PrimeChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
