import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortChannelComponent } from './portChannel.component';

describe('PortChannelComponent', () => {
    let component: PortChannelComponent;
    let fixture: ComponentFixture<PortChannelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PortChannelComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortChannelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
