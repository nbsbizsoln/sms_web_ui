import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IState} from '../shared/istate';
import { Observable } from 'rxjs';
import { IDistrict } from '../shared/idistrict';
import { School } from './ischool';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private stateUrl:string="http://localhost:8080/api/states";
  private districtByStateNameUrl:string = "http://localhost:8080/api/districts/findByStateName";
  private schoolBaseUrl="http://localhost:8080/api/schools";
 
  constructor(private _http:HttpClient) { }

  getStates():Observable<IState[]>{
      return this._http.get<IState[]>(this.stateUrl)
      .pipe(catchError(this.errorHandler));
     
  }

  errorHandler(err:HttpErrorResponse)
  {
    return throwError(err);
  }
  getDistrictListByState(stateName:string):Observable<IDistrict[]>{
    return this._http.get<IDistrict[]>(this.districtByStateNameUrl+"/"+stateName);
  }

  getSchool(id:number):Observable<School>{
    return this._http.get<School>(this.schoolBaseUrl+"/"+id);
  }

  getSchoolByUsername(username:string):Observable<School>{
    return this._http.get<School>(this.schoolBaseUrl+"/findByUsername/"+username);
  }
  updateSchool(school:School):Observable<School>{

    return this._http.post<School>(this.schoolBaseUrl,school)
    .pipe(catchError(this.errorHandler));
  }
}
