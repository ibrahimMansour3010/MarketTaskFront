import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { MarketRoutingModule } from './market-routing-module';
import { MarketPageComponent } from './market-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { OrderListComponent } from './components/order-list/order-list.component';
import { MarketViewComponent } from './components/market-view/market-view.component';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule} from '@angular/material/paginator';
import { AddEditOrderComponent } from './components/add-edit-order/add-edit-order.component';
import {  MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    OrderListComponent,
    MarketViewComponent,
    MarketPageComponent,
    AddEditOrderComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MarketRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class MarketModule { }
