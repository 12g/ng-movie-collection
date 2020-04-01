import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderViewSwitchComponent } from './header-view-switch.component';

describe('HeaderViewSwitchComponent', () => {
  let component: HeaderViewSwitchComponent;
  let fixture: ComponentFixture<HeaderViewSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderViewSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderViewSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
