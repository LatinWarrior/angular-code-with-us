import { Component, Input, OnInit } from '@angular/core';
import { Address } from './model';
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: 'address-detail',
    templateUrl: 'address-detail.component.html',
})
export class AddressDetailComponent implements OnInit {

    public states: Array<string>;

    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.getStates();
    }

    getStates(): void {
        this.dataService.getStates().subscribe(sts => {
            this.states = sts;
        }, (errorMsg: string) => {

        });
    }

    regions: Array<string> = ['East', 'West', 'South', 'North', 'Midwest'];
    //states: Array<string> = ['California', 'Illinois', 'Jalisco', 'Quebec'];       

    @Input() address: Address; // This comes from the container.

}