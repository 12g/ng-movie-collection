import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionViewerListComponent } from './list.component';

describe('TableComponent', () => {
  let component: CollectionViewerListComponent;
  let fixture: ComponentFixture<CollectionViewerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionViewerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionViewerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
