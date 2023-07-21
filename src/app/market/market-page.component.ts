import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css']
})
export class MarketPageComponent implements OnInit {
  constructor(private signalR: SignalRService) {

  }
  ngOnInit(): void {
    this.signalR.startConnection();
  }

}
