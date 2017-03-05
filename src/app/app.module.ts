import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressDetailComponent } from './address-detail.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

// Only for development.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, // Important: The order of these things actually matters!
    InMemoryWebApiModule.forRoot(InMemoryDataService) // <-- register in-mem-web-api and its data
    ], // What stuff do I need?
  declarations: [AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressDetailComponent], // What things are in my app.
  providers: [DataService,
    LoggerService,
    InMemoryDataService], // What providers do I need?
  bootstrap: [AppComponent] // Where do I start?
})
export class AppModule { }
