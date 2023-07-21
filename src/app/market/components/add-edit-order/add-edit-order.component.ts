import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderService } from '../../services/order.service';
import { LookupItemDto } from '../../models/common/lookup-item-dto';
import { OrderDto } from '../../models/order-dto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];
  stocks: LookupItemDto[] = [];
  order: OrderDto;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEditOrderComponent>,
    private orderServices: OrderService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar) {
    this.order = { id: 0, personName: '', price: 0, quantity: 0, stockName: '' };
  }
  ngOnInit(): void {
    this.getOrderLookup();
    if (this.data) {
      this.order = this.data;
    }
    this.createForm();

  }
  getOrderLookup() {
    this.orderServices.orderLookups().subscribe({
      next: res => {
        if (res.success) {
          this.stocks = res.data;
        } else {
          alert(res.message);
        }
      },
      error: err => {
        alert(err);
      },
    })
  }
  createForm(): void {
    this.form = this.fb.group({
      id: [this.order.id],
      personName: [this.order.personName, Validators.required],
      stockId: [this.order.stockId, Validators.required],
      price: [this.order.price, [Validators.required, Validators.min(1)]],
      quantity: [this.order.quantity, [Validators.required, Validators.min(1)]],
    });
  }
  onSubmit() {
    this.orderServices.manageOrder(this.form.value).subscribe({
      next: res => {
        debugger
        if (res.success) {
          this.dialogRef.close();
        }
        this._snackBar.open(res.message, '', {
          duration: 1000
        });
      },
      error: err => {
        this._snackBar.open(err, '', {
          duration: 1000
        });
      },
    })
  }
  onCancel() {
    this.dialogRef.close();
  }

}
