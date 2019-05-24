import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleLineComponent } from './multipleLIne.component';

describe('MultipleLineComponent', () => {
    let component: MultipleLineComponent;
    let fixture: ComponentFixture<MultipleLineComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MultipleLineComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MultipleLineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
