import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAirportsComponent } from './view-airports.component';

describe('ViewAirportsComponent', () => {
  let component: ViewAirportsComponent;
  let fixture: ComponentFixture<ViewAirportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAirportsComponent]
    });
    fixture = TestBed.createComponent(ViewAirportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
