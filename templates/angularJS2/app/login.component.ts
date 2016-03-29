import {Component} from 'angular2/core';
import {LoginService} from './login.service'


@Component({
    selector: 'my-app',
    templateUrl: './templates/login.html',
    providers: [LoginService],
})
export class LoginComponent {
    title:string = '登录-飞吧报账系统';
    account:string = '';
    errorMessage: string = '';
    isFailed: boolean = false;

    //constructor(private _loginService: LoginService){}
    //
    //loginSubmit(){
    //    var res = this._loginService.doLogin(this.account);
    //    if(res.status == 1){
    //        //tiaozhuan
    //    }else {
    //        this.isFailed = true;
    //        this.errorMessage = res.message;
    //    }
    //}
}