import { Component } from '@angular/core';
import { AccountSettingsService,AlertService } from '../Services/Index';
@Component({
  moduleId: module.id,
    templateUrl: './ResetPwd.Component.html'
     //styleUrls: ['./ForgetPwd.Component.css']
})
export class ResetPwdComponent {

  model:any={};
constructor(private accountService:AccountSettingsService,
  private alertService:AlertService

){

}
  onSubmit(){
  //var message=this.authenticateService.SentPwdResetLink(this.model.password);
  var result=this.accountService.ResetPwd(this.model.password);
this.alertService.success(result+this.model.password,false);  
  }
}