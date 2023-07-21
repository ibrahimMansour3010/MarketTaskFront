import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LookupItemDto } from '../models/common/lookup-item-dto';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection!: HubConnection;
  constructor() {
  }

  startConnection() {
    if (
      this.hubConnection == undefined ||
      this.hubConnection.state != signalR.HubConnectionState.Connected
    ) {
      this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(
          `${environment.API_BASE_URL}/hub`
          ,)
        .withAutomaticReconnect()
        .build();

      this.hubConnection
        .start()
        .then((res) => {
          // console.log(res);
        })
        .catch((err: any) =>
          console.error('error in signalR connection :' + err)
        );
    }
  }



  GetConnention() {
    return this.hubConnection;
  }
}
