import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';
import { Token } from './token';
import{ environment } from '../../environments/environment';

const apiEndpoint = environment.APIEndPoint;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private loginUrl = apiEndpoint+"/login";
  login(loginForm):Observable<Token>{
    return this.http.post<Token>(this.loginUrl, loginForm)
    .pipe(catchError(this.errorHandler));
  }

  loggedIn():boolean
  {
    return !!localStorage.getItem('token');
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  errorHandler(err:HttpErrorResponse)
  {
    return throwError(err);
  }
}
