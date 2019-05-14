import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFlowComponent } from './dataflow.component';

describe('ZoomComponent', () => {
  let component: DataFlowComponent;
  let fixture: ComponentFixture<DataFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
