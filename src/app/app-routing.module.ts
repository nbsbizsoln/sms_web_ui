import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import {SchoolClassComponent} from './school-class/school-class.component';
import {TeacherComponent} from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { SchoolClassListComponent } from './school-class-list/school-class-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
{path:'', redirectTo:"/login",pathMatch:"full"},
{path:'login', component:LoginComponent},
{path:'school_management', component:SchoolComponent,
canActivate:[LoginGuard]},
{path:'class_management', component:SchoolClassListComponent,
canActivate:[LoginGuard]},
{path:'class_management/:id', component:SchoolClassComponent,canActivate:[LoginGuard]},
{path:'teacher_management', component:TeacherListComponent,canActivate:[LoginGuard]},
{path:'teacher_management/:id', component:TeacherComponent,canActivate:[LoginGuard]},
{path:'student_management', component:StudentListComponent,canActivate:[LoginGuard]},
{path:'student_management', component:StudentListComponent,canActivate:[LoginGuard]},
{path:'student_management/:id', component:StudentComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
