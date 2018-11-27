import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Parent } from '../student/parent';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  private parentForm;

  private _parent1:Parent;

  @Output() private onParent = new EventEmitter();

  get parent1()
  {
    return this._parent1;
  }

  @Input() 
  set parent1(parent1:Parent)
  {

   console.log("Parent1 changed:"+parent1);
    
    this._parent1 = parent1;
    this.loadParent(this._parent1);
  }


  private _parent2:Parent;

  get parent2()
  {
    return this._parent2;
  }

  @Input() 
  set parent2(parent2:Parent)
  {

    console.log("Parent2 changed:"+parent2);
    
    this._parent2 = parent2;
    this.loadParent(this._parent2);
  }
  ngOnInit() {

    this.parentForm = this.fb.group({
      id:[''],
      name:[''],
      age:[''],
      sex:[''],
      phoneNumber1:[''],
      address:[''],
      dob:[''],
      phoneNumber2:[''],
      email:['']
    })
  }

  loadParent(parent:Parent){
    console.log(parent);
    if(parent !== null && parent !== undefined)
    {
      this.parentForm.patchValue({
        id:parent.id,
        name:parent.name,
        age:parent.age,
        sex:parent.sex,
        phoneNumber1:parent.phoneNumber1,
        phoneNumber2:parent.phoneNumber2,
        address:parent.address,
        dob:parent.dob,
        email:parent.email
      });
    }
    
  }

  onSubmit()
  {
    this.onParent.emit(this.parentForm.value);
  }

}
