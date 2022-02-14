import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from 'rxjs';

export const TOKEN = "pk_4899c148e67e41058ddb883073a65c29";

@Injectable({
  providedIn: "root",
})
export class StockService {
  private readonly BASE_URL = 'https://cloud.iexapis.com/stable';
  private readonly TOKEN = 'pk_4899c148e67e41058ddb883073a65c29';

  constructor(private httpClient: HttpClient) {}

  async getSymbols(): Promise<ISymbol[]> {
    const rawSymbols = await lastValueFrom(this.httpClient.get<any[]>(
      `${this.BASE_URL}/ref-data/symbols?token=${this.TOKEN}`
    ));

    const symbols = rawSymbols.filter((rawSymbol) => rawSymbol.isEnabled).map((rawSymbol) => {
      return {
        symbol: rawSymbol.symbol,
        name: rawSymbol.name,
        region: rawSymbol.region,
      }
    })

    return symbols;
  }

  getStockHistoryPrices(symbol:string) : Promise<any> {
    return lastValueFrom(this.httpClient.get<any[]>(`${this.BASE_URL}/stock/${symbol}/chart/3m/symbols?token=${this.TOKEN}`));

  }
}

export interface IApplicationState {
  symbols: ISymbol[];
}

export interface ISymbol {
  symbol: string;
  name: string;
  region: string;
}
