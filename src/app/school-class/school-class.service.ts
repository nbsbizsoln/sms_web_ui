import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';
import { SchoolClass } from './school-class';
import {environment} from '../../environments/environment';

const apiEndpoint = environment.APIEndPoint;
@Injectable({
  providedIn: 'root'
})
export class SchoolClassService {

  constructor(private http:HttpClient) { }
  private classBaseUrl = apiEndpoint+"/api/classes";
  getClassesBySchoolId(shoolId:number):Observable<SchoolClass[]>{
    return this.http.get<SchoolClass[]>(this.classBaseUrl+"/findBySchool/"+shoolId)
    .pipe(catchError(this.errorHandler));
  }

  getClassesById(classId:number):Observable<SchoolClass>{
    return this.http.get<SchoolClass>(this.classBaseUrl+"/"+classId)
    .pipe(catchError(this.errorHandler));
  }

  saveOrUpdate(schoolClassData):Observable<SchoolClass>
  {
    return this.http.post<SchoolClass>(this.classBaseUrl,schoolClassData);
  }

  errorHandler(err:HttpErrorResponse)
  {
    return throwError(err);
  }
}
