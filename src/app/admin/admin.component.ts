import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  message;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.foradmin();
  }

  foradmin(){
    this.userService.forAdmin().subscribe(
      (response) => {
        console.log(response);
        this.message=response;
      },
      (error) => {console.log(error);}
    );
  }
}
