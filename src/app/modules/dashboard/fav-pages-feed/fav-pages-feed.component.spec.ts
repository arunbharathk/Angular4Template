import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPagesFeedComponent } from './fav-pages-feed.component';

describe('FavPagesFeedComponent', () => {
  let component: FavPagesFeedComponent;
  let fixture: ComponentFixture<FavPagesFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavPagesFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavPagesFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
