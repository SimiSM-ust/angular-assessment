import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise4Component } from './exercise4.component';

describe('Exercise4Component', () => {
  let component: Exercise4Component;
  let fixture: ComponentFixture<Exercise4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise4Component]
    });
    fixture = TestBed.createComponent(Exercise4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
