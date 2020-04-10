import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobFileDownloadDialogComponent } from './blob-file-download-dialog.component';

describe('ExportDialogComponent', () => {
  let component: BlobFileDownloadDialogComponent;
  let fixture: ComponentFixture<BlobFileDownloadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlobFileDownloadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlobFileDownloadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
