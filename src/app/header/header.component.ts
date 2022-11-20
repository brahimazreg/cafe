import { UserService } from './../_services/user.service';
import { Router } from '@angular/router';
import { UserAuthService } from './../_services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userAuthService: UserAuthService ,
              private router: Router , private userService:UserService   ) { }

  ngOnInit(): void {

  }

  logout(){
    this.userAuthService.clearStorage();
   this.router.navigate(['/home']);
  }

  isLoggedIn(){
   return this.userAuthService.isLoggedIn();
  }

  isAdmin(){
   if(this.userAuthService.getRole() =="ROLE_ADMIN"){
   return true;
   }else {
     return false;
    };
  }

  isUser(){
    if(this.userAuthService.getRole() =="ROLE_USER"){
    return true;
    }else {
      return false;
     };
   }

}
