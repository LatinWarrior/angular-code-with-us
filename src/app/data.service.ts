import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Customer } from './model';
import { createTestCustomers } from './test-data';

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
    constructor(private http: Http) {

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

    getCustomers() {
        return createTestCustomers();
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