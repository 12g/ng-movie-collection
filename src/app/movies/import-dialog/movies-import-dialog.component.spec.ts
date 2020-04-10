import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesImportDialogComponent } from './movies-import-dialog.component';

describe('MoviesImportDialogComponent', () => {
  let component: MoviesImportDialogComponent;
  let fixture: ComponentFixture<MoviesImportDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesImportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesImportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
