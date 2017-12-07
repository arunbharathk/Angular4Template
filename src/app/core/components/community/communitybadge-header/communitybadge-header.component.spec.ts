import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitybadgeHeaderComponent } from './communitybadge-header.component';

describe('CommunitybadgeHeaderComponent', () => {
  let component: CommunitybadgeHeaderComponent;
  let fixture: ComponentFixture<CommunitybadgeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitybadgeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitybadgeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
