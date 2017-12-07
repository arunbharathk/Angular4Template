import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsbirthdaysHeaderComponent } from './friendsbirthdays-header.component';

describe('FriendsbirthdaysHeaderComponent', () => {
  let component: FriendsbirthdaysHeaderComponent;
  let fixture: ComponentFixture<FriendsbirthdaysHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsbirthdaysHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsbirthdaysHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
