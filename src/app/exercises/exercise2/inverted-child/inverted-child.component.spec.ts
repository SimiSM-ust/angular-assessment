import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedChildComponent } from './inverted-child.component';

describe('InvertedChildComponent', () => {
  let component: InvertedChildComponent;
  let fixture: ComponentFixture<InvertedChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvertedChildComponent]
    });
    fixture = TestBed.createComponent(InvertedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
