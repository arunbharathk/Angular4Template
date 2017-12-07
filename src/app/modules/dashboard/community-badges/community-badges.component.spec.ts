import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityBadgesComponent } from './community-badges.component';

describe('CommunityBadgesComponent', () => {
  let component: CommunityBadgesComponent;
  let fixture: ComponentFixture<CommunityBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
