import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { IndexManagementComponent } from './components/index-management/index-management.component';
import { SearchSymbolComponent } from './components/search-symbol/search-symbol.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    IndexManagementComponent,
    SearchSymbolComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
