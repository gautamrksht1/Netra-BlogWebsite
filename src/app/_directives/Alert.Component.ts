import { Component, OnInit } from '@angular/core';

import { AlertService } from '../Services/Index';

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'Alert.Component.html'
})

export class AlertComponent {
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}