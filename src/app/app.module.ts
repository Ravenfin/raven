import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { IndexManagementComponent } from './components/index-management/index-management.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {SearchSymbolComponent} from './components/search-symbol/search-symbol.component';
>>>>>>> d9f52f07e7545faaa6e08dd22cf99b0120b0fcd2

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    IndexManagementComponent,
    SearchSymbolComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
<<<<<<< HEAD
    HttpClientModule,
    AppRoutingModule
=======
    AppRoutingModule,
    BrowserAnimationsModule
>>>>>>> d9f52f07e7545faaa6e08dd22cf99b0120b0fcd2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
