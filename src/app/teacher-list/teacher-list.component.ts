import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher/teacher.service';
import { Teacher } from '../teacher/teacher';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(private teacherService:TeacherService, private router:Router,private route:ActivatedRoute) { }

  private teacherList:Teacher[];
  private errorMessage;
  ngOnInit() {

    let schoolId = +localStorage.getItem("schoolId");
    this.teacherService.getTeachersBySchoold(schoolId).subscribe(data=>{
      this.teacherList = data;
    },
    error=>{this.errorMessage= error.statusText});
  }

  addNewTeacher()
  {
    this.router.navigate(['./',0],{relativeTo:this.route});
  }

  editTeacher(teacher:Teacher)
  {
    console.log(teacher);
    this.router.navigate(['./',teacher.id],{relativeTo:this.route});
  }

}
