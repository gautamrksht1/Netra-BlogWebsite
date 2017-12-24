import { Component } from '@angular/core';
import { AlertService, AuthenticationService } from '../Services/Index';
@Component({
  moduleId: module.id,
    templateUrl: './ForgetPwd.Component.html'
  //styleUrls: ['./ForgetPwd.Component.css']
})
export class ForgetPwdComponent {

  model:any={};
constructor(private alertService:AlertService,
private authenticateService:AuthenticationService){

}
  onSubmit(){
  var message=this.authenticateService.SentPwdResetLink(this.model.email);
  this.alertService.success(message,false);
  }
}