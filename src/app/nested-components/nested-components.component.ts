import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nested-components',
  templateUrl: './nested-components.component.html',
  styleUrls: ['./nested-components.component.css']
})
export class NestedComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input("parentData") parentData;
  @Output() childEvent = new EventEmitter;

  sendEvent()
  {
    this.childEvent.emit('Hello how are you?');
  }
  message ="CodeEvolution";
  title = "welcome to my page";

}
