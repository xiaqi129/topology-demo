import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { BreadCrumbsModule } from '../breadcrumbs/breadcrumbs.module';
import { HeaderModule } from '../header/header.module';
import { LeftToolModule } from '../lefttool/lefttool.module';
import { AddPictureComponent } from './addpicture/addpicture.component';
import { DemoComponent } from './demo.component';
import { DataFlowComponent } from './data-flow/dataflow.component';
import { EdgeGroupComponent } from './edge-group/edgegroup.component';
import { EdgeComponent } from './edge/edge.component';
import { ElementComponent } from './element/element.component';
import { GroupComponent } from './group/group.component';
import { IconComponent } from './icon/icon.component';
import { LabelComponent } from './label/label.component';
import { MultiPathComponent } from './multipath/multipath.component';
import { SimpleComponent } from './simple/simple.component';
import { ToggleGroupComponent } from './togglegroup/togglegroup.component';
import { TreeComponent } from './tree/tree.component';
import { MultipleLineComponent } from './multiple-line/multipleLine.component';
import { MultipleColorLineComponent } from './multiple-color-line/multipleColorLine.component';
import { MarkComponent } from './mark/mark.component';

@NgModule({
    imports: [
        RouterModule,
        appRouter,
        HeaderModule,
        BreadCrumbsModule,
        LeftToolModule,
    ],
    exports: [],
    declarations: [
        SimpleComponent,
        DemoComponent,
        ElementComponent,
        GroupComponent,
        EdgeComponent,
        MultiPathComponent,
        AddPictureComponent,
        IconComponent,
        DataFlowComponent,
        TreeComponent,
        LabelComponent,
        ToggleGroupComponent,
        EdgeGroupComponent,
        MultipleLineComponent,
        MultipleColorLineComponent,
        MarkComponent
    ],
    entryComponents: [DemoComponent]
})
export class DemoModule {

}
