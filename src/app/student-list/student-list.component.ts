import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';
import { Student } from '../student/student';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private stdService:StudentService,private router:Router, private route:ActivatedRoute) { }

  studentList:Student[];
  errorMessage:string;
  ngOnInit() {
    let schoolId = +localStorage.getItem('schoolId');
    this.stdService.getStudentsBySchoolId(schoolId).subscribe(
      data=>{
        this.studentList = data;
        console.log(this.studentList);
        
      },
      err=>{this.errorMessage = err.statusText}
    );
  }

  addNewStudent()
  {
    this.router.navigate(['./',0],{relativeTo:this.route});
  }

  editStudent(student:Student)
  {
    this.router.navigate(['./',student.id],{relativeTo:this.route});
  }

}
