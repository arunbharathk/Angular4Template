import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFavsettingComponent } from './profile-favsetting.component';

describe('ProfileFavsettingComponent', () => {
  let component: ProfileFavsettingComponent;
  let fixture: ComponentFixture<ProfileFavsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFavsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFavsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
