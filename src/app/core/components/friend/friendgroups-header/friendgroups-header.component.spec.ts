import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendgroupsHeaderComponent } from './friendgroups-header.component';

describe('FriendgroupsHeaderComponent', () => {
  let component: FriendgroupsHeaderComponent;
  let fixture: ComponentFixture<FriendgroupsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendgroupsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendgroupsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
