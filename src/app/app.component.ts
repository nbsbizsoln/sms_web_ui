import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService:LoginService) { }
  title = 'Student Management System';
  private hideMenu = true;
  isLoggedIn()
  {
    if(this.loginService.loggedIn())
    {
      this.hideMenu = false;
    } 
    else{
      this.hideMenu = true;
    }
  }
}
