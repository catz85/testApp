import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    private uri : string;

    constructor() {
        this.uri = 'http://recruits.siennsoft.com/api';
    }

    getApiURI() {
        return this.uri;
    }
}
