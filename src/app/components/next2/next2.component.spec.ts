import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Next2Component } from './next2.component';

describe('Next2Component', () => {
  let component: Next2Component;
  let fixture: ComponentFixture<Next2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Next2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Next2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
