import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ISymbol, StockService} from '../../services/stock.service';

@Component({
  selector: 'app-search-symbol',
  templateUrl: './search-symbol.component.html',
  styleUrls: ['./search-symbol.component.less']
})
export class SearchSymbolComponent implements OnInit {
  symbols: ISymbol[] = [];

  constructor(private cd: ChangeDetectorRef, private stockService: StockService) {
  }

  async ngOnInit(): Promise<void> {
    this.symbols = await this.stockService.getSymbols();
    this.cd.markForCheck();
  }
}

