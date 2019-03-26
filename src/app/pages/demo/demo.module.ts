import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { DemoComponent } from './demo.component';
import { HeaderModule } from '../header/header.module';
import { BreadCrumbsModule } from '../breadcrumbs/breadcrumbs.module';

import { SimpleComponent } from './simple/simple.component';
import { ElementComponent } from './element/element.component';
import { GroupComponent } from './group/group.component';
import { EdgeComponent } from './edge/edge.component';
import { SelectComponent } from './select/select.component';
import { DragComponent } from './drag/drag.component';
import { IconComponent } from './icon/icon.component';
import { ZoomComponent } from './zoom/zoom.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { LabelComponent } from './label/label.component';
import { BundleComponent } from './bundle/bundle.component';
import { from } from 'rxjs';
@NgModule({
    imports: [
        RouterModule,
        appRouter,
        HeaderModule,
        BreadCrumbsModule,
    ],
    exports: [],
    declarations: [
        SimpleComponent,
        DemoComponent,
        ElementComponent,
        GroupComponent,
        EdgeComponent,
        SelectComponent,
        DragComponent,
        IconComponent,
        ZoomComponent,
        TooltipComponent,
        LabelComponent,
        BundleComponent
    ],
    entryComponents: [DemoComponent]
})
export class DemoModule {

}
