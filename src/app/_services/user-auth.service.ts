import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRole(role: string){
    localStorage.setItem("roleName",role);
  }
  public getRole():string{
    return localStorage.getItem("roleName");
  }
  public setToken(token:string){
    localStorage.setItem("token",token)
  }

  public getToken():string{
    return localStorage.getItem("token");
  }

  public clearStorage(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRole() && this.getToken();
  }
  public logout(){
    this.clearStorage();
  }

}
