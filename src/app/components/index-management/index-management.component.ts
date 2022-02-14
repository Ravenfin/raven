import { Component, OnInit } from "@angular/core";
import { StockService } from "src/app/services/stock.service";

@Component({
  selector: "app-index-management",
  templateUrl: "./index-management.component.html",
  styleUrls: ["./index-management.component.less"],
})
export class IndexManagementComponent implements OnInit {
  constructor(private stockService: StockService) {}

  async ngOnInit(): Promise<void> {
    const stockPrices = await this.stockService.getStockHistoryPrices("GOOG");
    console.log({ stockPrices });
  }
}
