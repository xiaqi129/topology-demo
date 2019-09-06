import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleColorLineComponent } from './multipleColorLine.component';

describe('MultipleColorLineComponent', () => {
    let component: MultipleColorLineComponent;
    let fixture: ComponentFixture<MultipleColorLineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MultipleColorLineComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MultipleColorLineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
