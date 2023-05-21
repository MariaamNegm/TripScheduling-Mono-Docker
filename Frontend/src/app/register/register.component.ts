import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { Admin } from '../model/admin/admin';
import { AuthServiceService } from '../services/login/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

  export class RegisterComponent  implements OnInit {

    constructor(private apiService:AuthServiceService, private router: Router) { }
    user ?: Admin;
  
    ngOnInit(): void {
    }
    registerUser(user: any){
    this.apiService.registerUser(user);
    this.router.navigate(['/login']);
   }
 

  
  

  }


  

