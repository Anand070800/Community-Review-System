import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg: any;
  user = new User();
  
  constructor(private service: ServicesService, private router: Router) { }

  ngOnInit(): void {
  
  }

  loginUser(){
    localStorage.clear();
    const loginData = {
      "userName": this.user.email,
      "password": this.user.password
    }
   
    this.service.generateToken(loginData).subscribe({
      next: (data: any) => {
        this.service.loginUserToken(data.token);
        this.service.getCurrentUser().subscribe({
          next: (user: any) => {
            this.service.setUser(user);
            if (this.service.getUserRole() === "ADMIN") {
              window.location.href = '/admin/home';
            } else if (this.service.getUserRole() === "NORMAL") {
              window.location.href = '/home';
            } else {
              this.service.logout();
            }
          },
          error: (error) => {
            console.log("Error");
            this.msg = "Please Check Your Email | Password";
          }
        });
      },
      error: (error) => {
        console.log("Error");
        this.msg = "Please Check Your Email | Password";
      }
    });
  }

  loggedIn(){
    return this.service.isLogIn();
  }

  logout(){
    this.service.logout();
    this.router.navigate(['home']);
  }
}
