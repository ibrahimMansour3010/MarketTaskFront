import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketViewComponent } from './market-view.component';

describe('StockComponent', () => {
  let component: MarketViewComponent;
  let fixture: ComponentFixture<MarketViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketViewComponent]
    });
    fixture = TestBed.createComponent(MarketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
