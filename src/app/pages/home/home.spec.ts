import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';

describe('Component: Home', () => {
    let component: HomeComponent;
    // // let module: HomeModule;
    let de: DebugElement;
    let fixture: ComponentFixture<HomeComponent>;
    let el: HTMLElement;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
        el = de.nativeElement;
    }));
    it('should display a different test title', () => {
        component.title = 'I am title';
        fixture.detectChanges();
        expect(el.textContent).toBe('I am title');
    });
});
