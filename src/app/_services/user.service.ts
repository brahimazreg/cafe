import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path="http://localhost:8080";

  requestHeaders=new HttpHeaders(
    {"No-Auth":"true"}
  );

  constructor(private httpClient:HttpClient) { }

   public login(loginData){
   return this.httpClient.post(this.path + "/login",loginData,{headers:this.requestHeaders})

   }

   // api foruser
   public forUser(){
    return this.httpClient.get(this.path+"/forUser",{responseType:"text"});
   }

   // api foradmin
   public forAdmin(){
    return this.httpClient.get(this.path+"/forAdmin",{responseType:"text"});
   }

  // todo fetch all product
  // 1. generate product
  //2. add clas product.ts and exports it

}
