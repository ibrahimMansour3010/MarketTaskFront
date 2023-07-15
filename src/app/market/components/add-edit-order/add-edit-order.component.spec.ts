import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOrderComponent } from './add-edit-order.component';

describe('AddEditOrderComponent', () => {
  let component: AddEditOrderComponent;
  let fixture: ComponentFixture<AddEditOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditOrderComponent]
    });
    fixture = TestBed.createComponent(AddEditOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
