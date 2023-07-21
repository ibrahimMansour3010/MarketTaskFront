import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { OrderDto } from '../models/order-dto';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/api-response';
import { LookupItemDto } from '../models/common/lookup-item-dto';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseAPI: string = environment.API_BASE_URL + '/api/Order'
  constructor(private http: HttpClient) { }


  getOrders(): Observable<ApiResponse<OrderDto[]>> {
    return this.http.get<ApiResponse<OrderDto[]>>(`${this.baseAPI}/GetAllOrders`);
  }

  manageOrder(order: OrderDto): Observable<ApiResponse<OrderDto>> {
    return this.http.post<ApiResponse<OrderDto>>(`${this.baseAPI}/ManageOrder`, order);
  }

  orderLookups(): Observable<ApiResponse<LookupItemDto[]>> {
    return this.http.get<ApiResponse<LookupItemDto[]>>(`${this.baseAPI}/GetOrderLookups`);
  }
  
  deleteOrder(id:number): Observable<ApiResponse<OrderDto>>{
    return this.http.delete<ApiResponse<OrderDto>>(`${this.baseAPI}/DeleteOrderById/${id}`);
  }

  getStocksPrices(): Observable<ApiResponse<LookupItemDto[]>> {
    return this.http.get<ApiResponse<LookupItemDto[]>>(`${this.baseAPI}/GetStocksPrices`);
  }
}
