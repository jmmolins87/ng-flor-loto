import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterAnimationComponent } from './typewriter-animation.component';

describe('TypewriterAnimationComponent', () => {
  let component: TypewriterAnimationComponent;
  let fixture: ComponentFixture<TypewriterAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypewriterAnimationComponent]
    });
    fixture = TestBed.createComponent(TypewriterAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
