import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router,
    private route:ActivatedRoute) { }


  private loginForm:FormGroup;
  private errorMessage;
  ngOnInit() {

    this.loginForm = this.fb.group({
      username:[''],
      password:['']
    });
  }



  onSubmit()
  {
    this.loginService.login(this.loginForm.value).subscribe(data=>{

      console.log("login success:"+data.token);
      localStorage.setItem("token",data.token);
      localStorage.setItem("username",data.username);
      this.router.navigate(['/school_management'])
    },err=>{this.errorMessage = err.statusText});
   
  }

}
