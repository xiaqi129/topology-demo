import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { IndexComponent } from './index.component';
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
    declarations: [IndexComponent],
    entryComponents: [IndexComponent]
})
export class IndexModule {

}
