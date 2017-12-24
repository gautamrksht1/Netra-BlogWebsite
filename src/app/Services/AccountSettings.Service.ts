import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AccountSettingsService {
    constructor(private http: Http) { }

   ResetPwd(pwd:string)
   {
       return 'Password changed successfully';
   }
}