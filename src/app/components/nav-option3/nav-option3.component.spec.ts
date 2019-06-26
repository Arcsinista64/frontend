import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOption3Component } from './nav-option3.component';

describe('NavOption3Component', () => {
  let component: NavOption3Component;
  let fixture: ComponentFixture<NavOption3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOption3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOption3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
