import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePersonalsettingComponent } from './profile-personalsetting.component';

describe('ProfilePersonalsettingComponent', () => {
  let component: ProfilePersonalsettingComponent;
  let fixture: ComponentFixture<ProfilePersonalsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePersonalsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePersonalsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
