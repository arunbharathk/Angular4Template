import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFavpageComponent } from './profile-favpage.component';

describe('ProfileFavpageComponent', () => {
  let component: ProfileFavpageComponent;
  let fixture: ComponentFixture<ProfileFavpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFavpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFavpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
