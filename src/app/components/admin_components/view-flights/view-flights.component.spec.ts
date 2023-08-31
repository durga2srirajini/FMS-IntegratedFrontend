import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlightsComponent } from './view-flights.component';

describe('ViewFlightsComponent', () => {
  let component: ViewFlightsComponent;
  let fixture: ComponentFixture<ViewFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFlightsComponent]
    });
    fixture = TestBed.createComponent(ViewFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
