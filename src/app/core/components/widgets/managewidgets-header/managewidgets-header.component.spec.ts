import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagewidgetsHeaderComponent } from './managewidgets-header.component';

describe('ManagewidgetsHeaderComponent', () => {
  let component: ManagewidgetsHeaderComponent;
  let fixture: ComponentFixture<ManagewidgetsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagewidgetsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagewidgetsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
