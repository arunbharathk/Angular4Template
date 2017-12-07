import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsBirthdaysComponent } from './friends-birthdays.component';

describe('FriendsBirthdaysComponent', () => {
  let component: FriendsBirthdaysComponent;
  let fixture: ComponentFixture<FriendsBirthdaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsBirthdaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsBirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
