import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
//import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LoginService {
    constructor (private http:Http) {}

    private _loginUrl = 'login';

    doLogin (loginData) {
        return this.http.post(this._loginUrl, loginData)
                        .map(res => res.json().data)
                        .catch(this.handelError);
    }

    private handelError(error: Response){
        console.error(error);
        return null;
    }
}