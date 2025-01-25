import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerBackgroundComponent } from './flower-background.component';

describe('FlowerBackgroundComponent', () => {
  let component: FlowerBackgroundComponent;
  let fixture: ComponentFixture<FlowerBackgroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowerBackgroundComponent]
    });
    fixture = TestBed.createComponent(FlowerBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
