import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { DemoComponent } from './demo.component';
import { HeaderModule } from '../header/header.module';

import { SimpleModule } from './simple/simple.module';
@NgModule({
    imports: [
        RouterModule,
        appRouter,
        HeaderModule,
        SimpleModule
    ],
    exports: [],
    declarations: [DemoComponent],
    entryComponents: [DemoComponent]
})
export class DemoModule {

}
