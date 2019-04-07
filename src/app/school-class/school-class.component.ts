import { Component, OnInit } from '@angular/core';
import { SchoolClass } from './school-class';
import { Teacher } from '../teacher/teacher';
import { TeacherService } from '../teacher/teacher.service';
import { SchoolClassService } from './school-class.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-school-class',
  templateUrl: './school-class.component.html',
  styleUrls: ['./school-class.component.css']
})
export class SchoolClassComponent implements OnInit {

   schoolClass:SchoolClass;
  teacherArr:Teacher[];
  errorMessage:string[];
   classId:number;

  constructor(private teacherService:TeacherService, private classService:SchoolClassService,
    private route:ActivatedRoute, private router:Router,private fb:FormBuilder) { }

  

   schoolClassForm;

  get className()
  {
      return this.schoolClassForm.get('className');
  }

  get subjectList()
  {
    return this.schoolClassForm.get('subjectList') as FormArray;
  }

  addSubject(sbj)
  {
    this.subjectList.push(this.createSubject(sbj));
  }

removeSubject(i)
{
  this.subjectList.removeAt(i);
}

createSubject(sbj):FormGroup{
  if(sbj == null || sbj === undefined)
  {
    return this.fb.group({
      id:[''],
      name:[''],
      teacherId:['']
    });
  }
  return this.fb.group({
      id:[sbj.id],
      name:[sbj.name],
      teacherId:[""+sbj.teacher.id]
  });
}






  ngOnInit() {

    this.schoolClassForm = this.fb.group({
      classId:[''],
      className:['',[Validators.required,Validators.minLength(3)]],
      classTeacherId:[''],
      subjectList:this.fb.array([])
    });

    //this.schoolClass = new SchoolClass(0,"",new Teacher(0,"Select One"),null,null);
    this.teacherService.getTeachersBySchoold(1).subscribe(data=>{
      this.teacherArr = data;
    },
    error=>{this.errorMessage=error.statusText});

    this.route.paramMap.subscribe(params=>{
        this.classId = parseInt(params.get('id'));
    });
    if(this.classId != 0)
    {
      this.classService.getClassesById(this.classId).subscribe(data=>{
        this.schoolClass = data;
        this.loadForm();
      }, error=>{this.errorMessage = error.statusText});
    }
    

    
  }

  loadForm()
  {
      this.schoolClassForm.patchValue({
          className: this.schoolClass.name,
          classTeacherId:""+this.schoolClass.classTeacher.id ,
          classId:this.schoolClass.id
      });
      this.loadSubjects(this.schoolClass.subjectList);

  }

  loadSubjects(sbjArr:any[])
  {
    if(sbjArr && sbjArr.length >0)
    {
      for(let sbj of sbjArr)
      {
        this.addSubject(sbj);
      }
    }
  }

  onSubmit()
  {
    console.log(this.schoolClassForm.value);
    this.classService.saveOrUpdate(this.schoolClassForm.value).subscribe(response=>{
        //console.log(response);
        this.router.navigate(['../'],{relativeTo:this.route});
        
    });
  }

  goToBack()
  {
    this.router.navigate(['../'],{relativeTo:this.route});

  }
}
