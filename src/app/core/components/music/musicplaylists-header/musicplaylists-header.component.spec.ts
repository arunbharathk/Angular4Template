import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicplaylistsHeaderComponent } from './musicplaylists-header.component';

describe('MusicplaylistsHeaderComponent', () => {
  let component: MusicplaylistsHeaderComponent;
  let fixture: ComponentFixture<MusicplaylistsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicplaylistsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicplaylistsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
