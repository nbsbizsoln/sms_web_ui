import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SchoolComponent } from './school/school.component';
import { SchoolClassComponent } from './school-class/school-class.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { NestedComponentsComponent } from './nested-components/nested-components.component';
import { SchoolClassListComponent } from './school-class-list/school-class-list.component';
import { SubjectComponent } from './subject/subject.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ParentComponent } from './parent/parent.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { TokenInterceptorService } from './login/token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SchoolComponent,
    SchoolClassComponent,
    TeacherComponent,
    StudentComponent,
    BindingsComponent,
    DirectivesDemoComponent,
    NestedComponentsComponent,
    SchoolClassListComponent,
    SubjectComponent,
    TeacherListComponent,
    StudentListComponent,
    ParentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MaterialModule
  ],
  providers: [LoginGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
