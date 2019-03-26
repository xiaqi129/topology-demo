import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { BreadCrumbsComponent } from './breadcrumbs.component';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [RouterModule, appRouter, CommonModule],
    exports: [BreadCrumbsComponent],
    declarations: [BreadCrumbsComponent],
    entryComponents: [BreadCrumbsComponent]
})
export class BreadCrumbsModule {

}
