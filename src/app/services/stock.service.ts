import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root",
})
export class StockService {
  constructor(private httpClient: HttpClient) {}

  getStockHistoryPrices(symbol:string) : Promise<any> {
    return this.httpClient.get(
      "https://cloud.iexapis.com/stable/stock/twtr/chart/1m?&token=pk_4899c148e67e41058ddb883073a65c29"
    ).toPromise();

  }
}
