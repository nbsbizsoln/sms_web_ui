import { Component, OnInit } from '@angular/core';
import { IState } from '../shared/istate';
import { SchoolService } from './school.service';
import { IDistrict } from '../shared/idistrict';
import { School } from './ischool';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  stateArr:IState[];
  districtArr:IDistrict[];
  school:School;
  errorMessage:string;
  stateHasError = false;
  constructor(private _schoolService:SchoolService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
     this._schoolService.getStates().subscribe(data=>{
        this.stateArr = data;
        console.log(this.stateArr);
        
      });
      
      this._schoolService.getSchoolByUsername(localStorage.getItem('username')).subscribe(data=>{
        this.school = data;
        localStorage.setItem("schoolId",""+this.school.id);
        console.log(this.school);
        this._schoolService.getDistrictListByState(this.school.state).subscribe(data=>{
          //this.school = data;
          this.districtArr = data;
          console.log(this.districtArr);
          
        });

      }, error=>this.errorMessage = error.statusText
      );

      /*this.stateArr = [{ id:1,name:"Kerala", districtList:[]},{ id:2,name:"Tamilnadu", districtList:[]}];*/
      this.school = new School(1,"Test","erumad","9620897195","default","Nilgiris");
      /*this.districtArr = [{name:"Wayanad"},{name:"Calicut"},{name:"Nilgiris"},{name:"Coimbatore"}];*/
      
  }

  loadDistrict(stateName:string)
  {
    //console.log("state name:"+stateName);
    this._schoolService.getDistrictListByState(stateName).subscribe(data=>{
        this.districtArr = data;
    });

    /*if(stateName === "Kerala")
    {
      this.districtArr = [{name:"Wayanad"},{name:"Calicut"}];

    }else{
      this.districtArr = [{name:"Nilgiris"},{name:"Coimbatore"}];
    }*/
  }

  updateSchool(school:School)
  {
    this._schoolService.updateSchool(school).subscribe(data=>{

        console.log(data);
        this.router.navigate(['../'],{relativeTo:this.route});
    },err=>this.errorMessage = err.statusText);
  }

  isValidState(value)
  {
    if(value === "default")
    {
      this.stateHasError = true;
    }
    else{
      this.stateHasError = false;
    }
  }
}
