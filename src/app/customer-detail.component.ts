import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer, Address } from './model';

@Component({
    moduleId: module.id,
    selector: 'customer-detail',
    templateUrl: `customer-detail.component.html`
})
export class CustomerDetailComponent {

    @Input() customer: Customer; // This comes from the list.
    @Output() shift = new EventEmitter<number>();

    address: Address;
    showAddress: boolean = true;

    right() {
        this.shift.emit(1);
    }

    left() {
        this.shift.emit(-1);
    }
}