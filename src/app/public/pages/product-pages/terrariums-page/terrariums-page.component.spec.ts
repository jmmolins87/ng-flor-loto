import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrariumsPageComponent } from './terrariums-page.component';

describe('TerrariumsPageComponent', () => {
  let component: TerrariumsPageComponent;
  let fixture: ComponentFixture<TerrariumsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerrariumsPageComponent]
    });
    fixture = TestBed.createComponent(TerrariumsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
