import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendGroupsComponent } from './friend-groups.component';

describe('FriendGroupsComponent', () => {
  let component: FriendGroupsComponent;
  let fixture: ComponentFixture<FriendGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
