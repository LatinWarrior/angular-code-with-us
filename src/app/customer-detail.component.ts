import { Component, Input } from '@angular/core';
import { Customer, Address } from './model';

@Component({
    moduleId: module.id,
    selector: 'customer-detail',
    templateUrl: `customer-detail.component.html`
})
export class CustomerDetailComponent {
    
    @Input() customer: Customer; // This comes from the list.

    address: Address;
    showAddress: boolean = true;
}