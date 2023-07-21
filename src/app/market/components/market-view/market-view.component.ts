import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SignalRService } from '../../services/signal-r.service';
import { LookupItemDto } from '../../models/common/lookup-item-dto';
import { HubConnection } from '@microsoft/signalr';
import { OrderService } from '../../services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-market-view',
  templateUrl: './market-view.component.html',
  styleUrls: ['./market-view.component.css']
})
export class MarketViewComponent implements OnInit {
  stocks: LookupItemDto[] = [];
  constructor(private stockServices: SignalRService, private orderServices: OrderService, private _snackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    this.GetStocksPrices();
    this.ReceiveStocksPrices(this.stockServices.GetConnention())
  }

  ReceiveStocksPrices(hubConnection: HubConnection) {
    hubConnection.on('receiveStocksPrices', (stockPriceData: LookupItemDto[]) => {
      this.stocks = stockPriceData;
      console.log('Received stock price data:', stockPriceData);
      console.log('Date', new Date());
    });
  }

  GetStocksPrices() {
    this.orderServices.getStocksPrices().subscribe({
      next: res => {
        if (res.success) {
          this.stocks = res.data;
        } else {
          this._snackBar.open(res.message, '', {
            duration: 1000
          });
        }
      },
      error: err => {
        this._snackBar.open(JSON.stringify(err), '', {
          duration: 1000
        });
      }
    })
  }
}
