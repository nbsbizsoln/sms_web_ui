import { Component, OnInit } from '@angular/core';
import { SchoolClassService } from '../school-class/school-class.service';
import { SchoolClass } from '../school-class/school-class';
import { Router, ActivatedRoute } from '@angular/router';

export interface PeriodicElement{
  name:string;
  position:number;
}

/*const ELEMENT_DATA:PeriodicElement[]=[
  {position:1,name:"Azeez"},
  {position:2,name:"Jair"},
  {position:3,name:"Siddique"},
  {position:4,name:"Neelam"},

];*/

@Component({
  selector: 'app-school-class-list',
  templateUrl: './school-class-list.component.html',
  styleUrls: ['./school-class-list.component.css']
})
export class SchoolClassListComponent implements OnInit {

  constructor(private classService:SchoolClassService,private router:Router,private route:ActivatedRoute) { }

   classList:SchoolClass[];
   errorMessage:string;

   displayedColumns = ['id','name','classTeacher','noofstd','noofsbj'];
  //private datasource = ELEMENT_DATA;

  ngOnInit() {
    let schoolId = +localStorage.getItem("schoolId");
    this.classService.getClassesBySchoolId(schoolId).subscribe(data=>{
      this.classList = data;
     // console.log(this.classList);
    },
    error=>{this.errorMessage=error.statusText}
    );
  }
  addNewClass()
  {
    this.router.navigate(['./',0],{relativeTo:this.route});
  }

  editClass(schoolClass:SchoolClass)
  {
    console.log(schoolClass);
    this.router.navigate(['./',schoolClass.id],{relativeTo:this.route});
  }

  alertVal(value)
  {
    console.log(value);
    
  }
}
