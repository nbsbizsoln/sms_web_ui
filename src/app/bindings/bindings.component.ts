import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  constructor() { }

  hasErrors =true;
  myColor="orange";

  styleClass = {
    color:"blue",
    fontStyle:'oblique'
  }
  ngOnInit() {
  }

  greeting = "";
  onClick(event)
  {
    this.greeting = event.type;
  }

  log(txt)
  {
    console.log(txt.value);
  }
}
