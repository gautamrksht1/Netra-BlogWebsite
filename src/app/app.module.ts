import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.Component';
import { LoginComponent } from './Login/Login.Component';
import { BlogComponent } from './Blog/CreateBlog/Blog.Component';
import { RegisterComponent } from './Register/Register.Component';
import { ForgetPwdComponent } from './ForgetPassword/ForgetPwd.Component';
import { ResetPwdComponent } from './ResetPassword/ResetPwd.Component';
import { BlogListComponent } from './Blog/BlogList/BlogList.Component';



import { AlertComponent } from './_directives/Alert.Component';
import { AuthGuard } from './Guards/Auth.Guard';
import { AlertService, AuthenticationService, UserService,CategoryService ,AccountSettingsService,BlogService} from './Services/Index';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Login', component: LoginComponent },
  { path: 'ForgetPwd', component: ForgetPwdComponent },
  { path: 'Blog', component: BlogComponent,canActivate: [AuthGuard] },
  { path: 'Register', component: RegisterComponent },
  { path: 'ResetPwd', component: ResetPwdComponent },
  { path: 'BlogList', component: BlogListComponent },
  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    BlogComponent,
    ForgetPwdComponent ,
    ResetPwdComponent  ,
    BlogListComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [
   BlogService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    CategoryService,
    AccountSettingsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
