import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePersonalinfoComponent } from './profile-personalinfo.component';

describe('ProfilePersonalinfoComponent', () => {
  let component: ProfilePersonalinfoComponent;
  let fixture: ComponentFixture<ProfilePersonalinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePersonalinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePersonalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
