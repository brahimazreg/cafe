import { UserAuthService } from './../_services/user-auth.service';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private userAuthService:UserAuthService,private router: Router) { }

  ngOnInit(): void {
  }

  public login(loginData:NgForm):any{
    //console.log("Form is submitted");
    //console.log(loginData.value);
    this.userService.login(loginData.value).subscribe(
      (data:any )=> {
           //console.log (data.role);
          // console.log (data.token);
           this.userAuthService.setRole(data.role);
           this.userAuthService.setToken(data.token);
           if(this.userAuthService.getRole() === "ROLE_ADMIN"){
             this.router.navigate(['/admin']);

           }else {
            this.router.navigate(['/user']);
           }

                        },
      (error)=> {console.log(error)}


      ) ;
  }

}
