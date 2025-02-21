import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthenaSharedComponent } from './athena-shared.component';

describe('AthenaSharedComponent', () => {
  let component: AthenaSharedComponent;
  let fixture: ComponentFixture<AthenaSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthenaSharedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthenaSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
