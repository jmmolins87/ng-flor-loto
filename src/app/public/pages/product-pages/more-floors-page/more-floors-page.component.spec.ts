import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFloorsPageComponent } from './more-floors-page.component';

describe('MoreFloorsPageComponent', () => {
  let component: MoreFloorsPageComponent;
  let fixture: ComponentFixture<MoreFloorsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreFloorsPageComponent]
    });
    fixture = TestBed.createComponent(MoreFloorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
