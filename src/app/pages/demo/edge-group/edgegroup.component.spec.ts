import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeGroupComponent } from './edgegroup.component';

describe('EdgeGroupComponent', () => {
  let component: EdgeGroupComponent;
  let fixture: ComponentFixture<EdgeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdgeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
