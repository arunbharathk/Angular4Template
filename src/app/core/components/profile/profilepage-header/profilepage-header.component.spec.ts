import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilepageHeaderComponent } from './profilepage-header.component';

describe('ProfilepageHeaderComponent', () => {
  let component: ProfilepageHeaderComponent;
  let fixture: ComponentFixture<ProfilepageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilepageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilepageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
