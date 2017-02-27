import { Component, Input} from '@angular/core';
import { Address } from './model';

@Component({
    moduleId: module.id,
    selector: 'address-detail',
    templateUrl: 'address-detail.component.html',
})
export class AddressDetailComponent  { 

    regions: Array<string> = ['East', 'West', 'South', 'North', 'Midwest'];
    states: Array<string> = ['California', 'Illinois', 'Jalisco', 'Quebec'];

    @Input() address: Address; // This comes from the container.

}