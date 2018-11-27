import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentBaseUrl: string="http://localhost:8080/api/students";

  constructor(private http:HttpClient) { }

  getStudentsBySchoolId(schoolId:number):Observable<Student[]>{
    return this.http.get<Student[]>(this.studentBaseUrl+"/findBySchool/"+schoolId)
    .pipe(catchError(this.errorHandler));
  }

  getStudentById(stdId:number):Observable<Student>{
    return this.http.get<Student>(this.studentBaseUrl+"/"+stdId).pipe(catchError(this.errorHandler));
  }

  save(studentForm){
   return this.http.post(this.studentBaseUrl,studentForm).pipe(catchError(this.errorHandler));
  }
  errorHandler(err:HttpErrorResponse)
  {
    return throwError(err);
  }
}
