import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { LeftToolComponent } from './lefttool.component';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [RouterModule, appRouter, CommonModule],
    exports: [LeftToolComponent],
    declarations: [LeftToolComponent],
    entryComponents: [LeftToolComponent]
})
export class LeftToolModule {

}
