import {Observable} from 'rxjs/Rx';


export abstract class BaseService {

    constructor() {
    }

    protected handleError(error:any) {
        var applicationError = error.headers.get('Application-Error');
        return Observable.throw(applicationError);
    }
}