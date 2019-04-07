import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Teacher } from './teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
   errorMessage: any;

  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router,
    private ts:TeacherService) { }

   teacherForm;
   teacherId:number;
   teacher:Teacher;

  get school()
  {
    return this.teacherForm.get('school');
  }

  ngOnInit() {

    this.teacherForm = this.fb.group({
      id:[''],
      name:[''],
      age:[''],
      sex:[''],
      address:[''],
      contactNumber:[''],
      email:[''],
      dob:[''],
      school:this.fb.group({
        id:['']
      })
    });

    this.route.paramMap.subscribe(params=>{
      this.teacherId = +params.get('id');
    });

    if(this.teacherId != 0)
    {
      this.ts.getTeacherById(this.teacherId).subscribe(data=>{
        this.teacher = data;
        console.log(data);
        
        this.loadForm();
      },err=>{this.errorMessage=err.statusText}
      );
    }
    else{
      this.school.patchValue({
        id:1
      });
    }

    
    
  }

  loadForm()
  {
      this.teacherForm.patchValue({
        id:this.teacher.id,
        name:this.teacher.name,
        age:this.teacher.age,
        address:this.teacher.address,
        sex:this.teacher.sex,
        email:this.teacher.email,
        contactNumber:this.teacher.contactNumber,
        dob:this.teacher.dob,
        school:{
          id:this.teacher.school.id
        }
      });
  }

  /* formatDate(date) {
     console.log(date);
     
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, month].join('-');
    
   }*/

   onSubmit()
   {
     this.ts.saveOrUpdate(this.teacherForm.value).subscribe(data=>{
       console.log(data);
       this.router.navigate(['../'],{relativeTo:this.route});
     }
      ,err=>{this.errorMessage =err.statusText});
   }

   goToBack()
  {
    this.router.navigate(['../'],{relativeTo:this.route});

  }

}
