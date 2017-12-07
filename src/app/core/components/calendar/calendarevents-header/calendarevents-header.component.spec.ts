import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendareventsHeaderComponent } from './calendarevents-header.component';

describe('CalendareventsHeaderComponent', () => {
  let component: CalendareventsHeaderComponent;
  let fixture: ComponentFixture<CalendareventsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendareventsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendareventsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
