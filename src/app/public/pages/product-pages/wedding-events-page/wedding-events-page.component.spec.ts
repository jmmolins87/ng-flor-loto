import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingEventsPageComponent } from './wedding-events-page.component';

describe('WeddingEventsPageComponent', () => {
  let component: WeddingEventsPageComponent;
  let fixture: ComponentFixture<WeddingEventsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingEventsPageComponent]
    });
    fixture = TestBed.createComponent(WeddingEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
