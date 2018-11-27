import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponentsComponent } from './nested-components.component';

describe('NestedComponentsComponent', () => {
  let component: NestedComponentsComponent;
  let fixture: ComponentFixture<NestedComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
