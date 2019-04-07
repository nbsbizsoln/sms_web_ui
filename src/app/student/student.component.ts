import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from './student';
import { Parent } from './parent';
import { SchoolClass } from '../school-class/school-class';
import { SchoolClassService } from '../school-class/school-class.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private stdService:StudentService, private router:Router, 
    private route:ActivatedRoute,private fb:FormBuilder,private scService:SchoolClassService) { }

   studentForm;
   stdId:number;
   errorMessage:string;
   student:Student=new Student(0,"","",0,"",null,"","","",true,null,null,null,null);
   classArr:SchoolClass[];

  ngOnInit() {

    this.studentForm = this.fb.group({
      id:[''],
      name:[''],
      age:[''],
      sex:[''],
      rollNumber:[''],
      address:[''],
      dob:[''],
      phoneNumber:[''],
      email:[''],
      parent1:this.fb.group({
        id:[''],
        name:[''],
        age:[''],
        sex:[''],
        phoneNumber1:[''],
        address:[''],
        dob:[''],
        phoneNumber2:[''],
        email:['']
      }),
      parent2:this.fb.group({
        id:[''],
        name:[''],
        age:[''],
        sex:[''],
        phoneNumber1:[''],
        address:[''],
        dob:[''],
        phoneNumber2:[''],
        email:['']
      }),
      schoolClass:this.fb.group({
        id:[''],
        name:['']
      })
    });



    this.route.paramMap.subscribe(params=>{
      this.stdId = +params.get("id");
    });

    this.scService.getClassesBySchoolId(1).subscribe(data=>{
      this.classArr = data;
    },err=>{this.errorMessage = err.statusText});

    if(this.stdId != 0)
    {
      this.stdService.getStudentById(this.stdId).subscribe(
        data=>{
            this.student = data;
            this.loadForm();
        },
        error=>{this.errorMessage = error.statusText}
      );
    }else{
      this.studentForm.patchValue({
          schoolClass:{
            id:0
          }
      });
    }
  }

  loadForm()
  {
    this.studentForm.patchValue({
      id: this.student.id,
      name:this.student.name,
      age: this.student.age,
      email: this.student.email,
      sex:this.student.sex,
      phoneNumber:this.student.phoneNumber,
      address:this.student.address,
      rollNumber:this.student.rollNumber,
      dob:this.student.dob,
      schoolClass:this.student.schoolClass,
      parent1:this.student.parent1,
      parent2:this.student.parent2
    });
  }

  onParentLoad(value:Parent,componentName)
  {
    if(componentName === "parent2")
    {
      this.studentForm.patchValue({
        parent2:value
    });
    }
    else if(componentName === "parent1")
    {
      this.studentForm.patchValue({
          parent1:value
      });
    }
    
  }

  onSubmit()
  {
    console.log("Inside onsubmit");
    
    this.stdService.save(this.studentForm.value).subscribe(data=>
      {
        //console.log(data);
        this.router.navigate(['../'],{relativeTo:this.route});
        
      },err=>{this.errorMessage =err.statusText});
  }

  goToBack()
  {
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}
