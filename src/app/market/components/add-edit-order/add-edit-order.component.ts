import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddEditOrderComponent>) { }
  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void {
    this.form = this.fb.group({
      persons: ['', Validators.required],
      stocks: ['', Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required],
    });
  }
  onSubmit() {

  }
  onCancel() {
    this.dialogRef.close();
  }

}
