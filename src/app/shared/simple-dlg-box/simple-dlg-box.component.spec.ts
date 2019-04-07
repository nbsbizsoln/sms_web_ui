import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDlgBoxComponent } from './simple-dlg-box.component';

describe('SimpleDlgBoxComponent', () => {
  let component: SimpleDlgBoxComponent;
  let fixture: ComponentFixture<SimpleDlgBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDlgBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDlgBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
