import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextInnerComponent } from './next-inner.component';

describe('NextInnerComponent', () => {
  let component: NextInnerComponent;
  let fixture: ComponentFixture<NextInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextInnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
