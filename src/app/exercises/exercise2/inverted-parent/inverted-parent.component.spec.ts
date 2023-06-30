import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertedParentComponent } from './inverted-parent.component';

describe('InvertedParentComponent', () => {
  let component: InvertedParentComponent;
  let fixture: ComponentFixture<InvertedParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvertedParentComponent]
    });
    fixture = TestBed.createComponent(InvertedParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
