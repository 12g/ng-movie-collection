import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesGridCardComponent } from './movies-grid-card.component';

describe('MoviesGridCardComponent', () => {
  let component: MoviesGridCardComponent;
  let fixture: ComponentFixture<MoviesGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesGridCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
