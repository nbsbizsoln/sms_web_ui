import { Component, OnInit } from '@angular/core';
import { SchoolClassService } from '../school-class/school-class.service';
import { SchoolClass } from '../school-class/school-class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school-class-list',
  templateUrl: './school-class-list.component.html',
  styleUrls: ['./school-class-list.component.css']
})
export class SchoolClassListComponent implements OnInit {

  constructor(private classService:SchoolClassService,private router:Router,private route:ActivatedRoute) { }

  private classList:SchoolClass[];
  private errorMessage:string;

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
}
