import { Component, OnInit } from '@angular/core';

import { Customer } from './model';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];

  customer: Customer;

  constructor(private dataService: DataService,
    private loggerService: LoggerService) {

  }

  // Lifecycle goes here.
  ngOnInit() {
    this.loggerService.log('Getting customers...');
    this.customers = this.dataService.getCustomers();
  }

  shift(increment: number) {
    let index = this.customers.findIndex(c => c === this.customer) + increment;
    index = Math.min(this.customers.length - 1, Math.max(0, index));
    this.customer = this.customers[index];
    console.log('increment: ', increment);
  }
}
