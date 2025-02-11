import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchidsPageComponent } from './orchids-page.component';

describe('OrchidsPageComponent', () => {
  let component: OrchidsPageComponent;
  let fixture: ComponentFixture<OrchidsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrchidsPageComponent]
    });
    fixture = TestBed.createComponent(OrchidsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
