import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCustomers } from './test-data';

export class InMemoryDataService implements InMemoryDbService {

    private states: Array<string> = ['California', 'Illinois', 'Jalisco', 'Quebec'];

    createDb() {
        return {
            customers: createTestCustomers(),
            states: this.states
        }
    }
}