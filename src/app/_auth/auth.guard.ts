import { UserAuthService } from './../_services/user-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userAuthService.getToken  != null){
      const role: string = route.data.role;
      if(role && role === this.userAuthService.getRole()){
        return true;
      }else {
        this.router.navigate(['/forbidden']);
        return false;
      }

    }

    this.router.navigate(['/login']);
    return false;
  }

}
