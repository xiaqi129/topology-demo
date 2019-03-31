import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPathComponent } from './multipath.component';

describe('MultiPathComponent', () => {
  let component: MultiPathComponent;
  let fixture: ComponentFixture<MultiPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
