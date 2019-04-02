import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleGroupComponent } from './togglegroup.component';

describe('ToggleGroupComponent', () => {
  let component: ToggleGroupComponent;
  let fixture: ComponentFixture<ToggleGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
