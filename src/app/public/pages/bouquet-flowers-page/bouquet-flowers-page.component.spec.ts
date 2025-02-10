import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetFlowersPageComponent } from './bouquet-flowers-page.component';

describe('BouquetFlowersPageComponent', () => {
  let component: BouquetFlowersPageComponent;
  let fixture: ComponentFixture<BouquetFlowersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BouquetFlowersPageComponent]
    });
    fixture = TestBed.createComponent(BouquetFlowersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
