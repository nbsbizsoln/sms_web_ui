import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Teacher } from './teacher';

import {catchError} from 'rxjs/operators';
import{throwError,Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const apiEndpoint = environment.APIEndPoint;

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  constructor(private http:HttpClient) { }
  private teacherBaseUrl = apiEndpoint+"/api/teachers";
  
  getTeachersBySchoold(shoolId:number):Observable<Teacher[]>{
    return this.http.get<Teacher[]>(this.teacherBaseUrl+"/findBySchool/"+shoolId)
    .pipe(catchError(this.errorHandler));
  }

  getTeacherById(teacherId):Observable<Teacher>{
    return this.http.get<Teacher>(this.teacherBaseUrl+"/"+teacherId)
    .pipe(catchError(this.errorHandler));
  }

  saveOrUpdate(teacherForm){
    return this.http.post(this.teacherBaseUrl,teacherForm)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(err:HttpErrorResponse)
  {
    return throwError(err);
  }
}
