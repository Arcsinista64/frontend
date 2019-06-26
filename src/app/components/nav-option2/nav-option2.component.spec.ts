import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOption2Component } from './nav-option2.component';

describe('NavOption2Component', () => {
  let component: NavOption2Component;
  let fixture: ComponentFixture<NavOption2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavOption2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
