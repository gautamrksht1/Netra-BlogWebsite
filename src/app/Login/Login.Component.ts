import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../Services/Index';

@Component({
    moduleId: module.id,
    templateUrl: 'Login.Component.html',
    styleUrls:['Login.Component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    postData:any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        console.log(this.returnUrl);
        console.log('loginModel= ',this.model);
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.postData=data;
                    console.log('Login Success='+  JSON.stringify(this.postData.token));
                    localStorage.setItem('Authtoken',JSON.stringify(data.token));
                    this.router.navigate(['/BlogList']);
                    
                },
                error => {
                    this.alertService.error(error);
                });
    }
}
