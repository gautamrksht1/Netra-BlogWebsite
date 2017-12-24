import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions }   from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
@Injectable()
export class AuthenticationService {
    public token:string;
    constructor(private http: Http) { 
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string):Observable<any> {
        console.log('InsideAuthService= '+JSON.stringify({ username: username, password: password }));      
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body=JSON.stringify({ username: username, password: password });
       // console.log('inside create registerModel service method',this.apiUrl,body);
        return this.http.post("http://localhost:3000/Users/Login", body, options)
                        .map(this.extractData)
                       .catch(this.handleError);
    }
    private extractData(res:Response)
    { 
    console.log('post test:='+JSON.stringify(res));
    
     //localStorage.setItem('currentUser', JSON.stringify(body.username));
      return res.json();
      
     // return <RegisterModel>res.json();
    }
    private handleError (error: Response | any) 
    {
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response)
       {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
       } else 
      {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
    logout() {
        // remove user from local storage to log user out
        
        localStorage.removeItem('currentUser');
    }
    //mock services need to hook it with actual later
    SentPwdResetLink(Email:string){
        return 'A password reset link sent to your registered email';
    }
}