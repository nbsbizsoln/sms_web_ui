import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private loginSrv:LoginService, private router:Router)
  {}

  canActivate():boolean{
    if(this.loginSrv.loggedIn())
    {
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
