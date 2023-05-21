import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin/admin';
import { AuthServiceService } from '../services/login/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthServiceService, private router: Router) { }
  admin: Admin =new Admin();

  ngOnInit(): void {
  }
  goToSignUp(): void{
    this.router.navigate(['/register']);
  }

  goToHome():void{
    this.router.navigate(['/home']);
  }


    loginUser2(user:any){
     
    
      console.log("entereed email= "+ user.email);
      console.log("dbpassword= "+ user.password);
      console.log("em fn= "+this.authService.adminbyemail());
      console.log("pass fn= "+this.authService.adminbypass());
      
   
      //if(user.email != null && (user.email === this.authService.adminbyemail()) && (user.password === this.authService.adminbypass())){
        
        if(user.email != null && (user.email.localeCompare(this.authService.adminbyemail())) && (user.password.localeCompare(this.authService.adminbypass())))
        {this.authService.loginUser2(user);
        this.router.navigate(['/home']);
        alert("sucessfully login");
      }
      else{
        alert("enter username and password");
      }
      
    }
   
    
  }

