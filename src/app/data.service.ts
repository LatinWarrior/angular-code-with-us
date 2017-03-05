import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Customer } from './model';
import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';

/**
* This class provides the Data service with methods to read names and add names.
*/
@Injectable()
export class DataService {
    /**
    * Creates a new NameListService with the injected Http.
    * @param {Http} http - The injected Http.
    * @constructor
    */

    private customersUrl = 'api/customers';
    private statesUrl = 'api/states';

    constructor(private http: Http, private loggerService: LoggerService) {

    }
    /**
    * Returns an Observable for the HTTP GET request for the JSON resource.
    * @return {string[]} The Observable for the HTTP request.
    */
    // getCustomers(): Observable<Array<Customer>> {
    //     return this.http.get('/test-data.json')
    //     .map((res: Response) => res.json())
    //     //              .do(data => console.log('server data:', data))  // debug
    //     .catch(this.handleError);
    // }

    getCustomersP(): Promise<Customer[]> {

        this.loggerService.log('Getting customers as a Promise via Http...');

        return this
            .http
            .get(this.customersUrl)
            .toPromise()
            .then(response => {
                const custs = response.json().data as Customer[];
                this.loggerService.log(`Got ${custs.length} customers`);
                return custs;
            }, error => {
                this.loggerService.log(`Error occurred: ${error}`);
                return Promise.reject('Something bad happened in getting customers. Please check the console.');
            });        
    }

    getCustomers(): Observable<Customer[]> {

        this.loggerService.log('Getting customers as an Observable via Http...');

        return this
            .http
            .get(this.customersUrl)
            .map(response => response.json().data as Customer[])
            .do((custs) => {
                this.loggerService.log(`Got ${custs.length} customers`);
            })
            .catch((error: any) => {
                this.loggerService.log(`Error occurred: ${error}`);
                return Observable.throw('Something bad happened in getting customers. Please check the console.');
            });
    }

    getStates(): Observable<Array<string>> {

        this.loggerService.log('Getting states as an Observable via Http...');

        return this
            .http
            .get(this.statesUrl)
            .map(resp => resp.json().data as Array<string>)
            .do((states) => {
                this.loggerService.log(`Got ${states.length} states`);
            })
            .catch((error: any) => {
                this.loggerService.log(`Error occurred: ${error}`);
                return Observable.throw('Something bad happened in getting states. Please check the console.');
            });
    }

    /**
    * Handle HTTP error
    */
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `error.status - error.statusText` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}