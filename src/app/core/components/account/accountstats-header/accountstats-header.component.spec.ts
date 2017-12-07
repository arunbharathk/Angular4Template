import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountstatsHeaderComponent } from './accountstats-header.component';

describe('AccountstatsHeaderComponent', () => {
  let component: AccountstatsHeaderComponent;
  let fixture: ComponentFixture<AccountstatsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountstatsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountstatsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
