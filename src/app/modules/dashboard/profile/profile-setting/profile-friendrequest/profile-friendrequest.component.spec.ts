import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFriendrequestComponent } from './profile-friendrequest.component';

describe('ProfileFriendrequestComponent', () => {
  let component: ProfileFriendrequestComponent;
  let fixture: ComponentFixture<ProfileFriendrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFriendrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFriendrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
