import { Component, OnInit } from '@angular/core';
import { OrderDto } from '../../models/order-dto';
import {MatDialog} from '@angular/material/dialog';
import { AddEditOrderComponent } from '../add-edit-order/add-edit-order.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'stockId', 'price', 'quantity','personName','settings'];
  dataSource:OrderDto[] = [];
  constructor(public dialog: MatDialog){
  }
  ngOnInit(): void {
    this.dataSource = [
      {id:1,stockId:1,price:500,quantity:10,personName:'ali'}
    ]
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditOrderComponent, {
      width:'50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
