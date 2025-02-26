import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDockComponent } from './global-dock.component';

describe('GlobalDockComponent', () => {
  let component: GlobalDockComponent;
  let fixture: ComponentFixture<GlobalDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalDockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
