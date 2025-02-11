import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuneralsPageComponent } from './funerals-page.component';

describe('FuneralsPageComponent', () => {
  let component: FuneralsPageComponent;
  let fixture: ComponentFixture<FuneralsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuneralsPageComponent]
    });
    fixture = TestBed.createComponent(FuneralsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
