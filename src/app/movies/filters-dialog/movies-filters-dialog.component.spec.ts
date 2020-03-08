import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesFiltersDialogComponent } from './filters-dialog.component';

describe('FiltersDialogComponent', () => {
  let component: MoviesFiltersDialogComponent;
  let fixture: ComponentFixture<MoviesFiltersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesFiltersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesFiltersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
