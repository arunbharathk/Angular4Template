import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesettingHeaderComponent } from './profilesetting-header.component';

describe('ProfilesettingHeaderComponent', () => {
  let component: ProfilesettingHeaderComponent;
  let fixture: ComponentFixture<ProfilesettingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesettingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesettingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
