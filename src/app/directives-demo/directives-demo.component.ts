import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isEnabled = true;
  color="orange";

  colors = ["red","blue","green","yellow","black"];
  selectedColor="red";

  

}
