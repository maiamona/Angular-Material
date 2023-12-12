import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chips1Component } from './chips1.component';

describe('Chips1Component', () => {
  let component: Chips1Component;
  let fixture: ComponentFixture<Chips1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chips1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Chips1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
