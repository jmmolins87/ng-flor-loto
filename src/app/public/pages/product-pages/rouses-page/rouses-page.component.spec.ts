import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RousesPageComponent } from './rouses-page.component';

describe('RousesPageComponent', () => {
  let component: RousesPageComponent;
  let fixture: ComponentFixture<RousesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RousesPageComponent]
    });
    fixture = TestBed.createComponent(RousesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
