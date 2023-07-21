import { Component, OnInit } from '@angular/core';
import { OrderDto } from '../../models/order-dto';
import { MatDialog } from '@angular/material/dialog';
import { AddEditOrderComponent } from '../add-edit-order/add-edit-order.component';
import { OrderService } from '../../services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'stockName', 'price', 'quantity', 'personName', 'settings'];
  dataSource: OrderDto[] = [];
  constructor(public dialog: MatDialog, private orderService: OrderService,
    private _snackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    this.orderService.getOrders().subscribe({
      next: res => {
        if (res.success) {
          this.dataSource = res.data;
        } else {
          this._snackBar.open(res.message, '', {
            duration: 1000
          });
        }
      },
      error: err => {
        this._snackBar.open(err, '', {
          duration: 1000
        });
      }
    })
  }
  openDialog(element?: OrderDto): void {
    const dialogRef = this.dialog.open(AddEditOrderComponent, {
      width: '50%',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getOrders();
    });
  }

  deleteOrder(id: number) {
    this.orderService.deleteOrder(id).subscribe({
      next: res => {
        if (res.success) {
          this.getOrders();
        }
        this._snackBar.open(res.message, '', {
          duration: 1000
        });
      },
      error: err => {
        this._snackBar.open(err, '', {
          duration: 1000
        });
      }
    })
  }
}
