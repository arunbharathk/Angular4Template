import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHobbiesComponent } from './profile-hobbies.component';

describe('ProfileHobbiesComponent', () => {
  let component: ProfileHobbiesComponent;
  let fixture: ComponentFixture<ProfileHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
