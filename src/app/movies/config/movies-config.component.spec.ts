import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesConfigComponent } from './movies-config.component';

describe('MoviesConfigComponent', () => {
  let component: MoviesConfigComponent;
  let fixture: ComponentFixture<MoviesConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
