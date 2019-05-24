import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { DemoComponent } from '../pages/demo/demo.component';

import { SimpleComponent } from '../pages/demo/simple/simple.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ElementComponent } from '../pages/demo/element/element.component';
import { GroupComponent } from '../pages/demo/group/group.component';
import { EdgeComponent } from '../pages/demo/edge/edge.component';
import { MultiPathComponent } from '../pages/demo/multipath/multipath.component';
import { AddPictureComponent } from '../pages/demo/addpicture/addpicture.component';
import { IconComponent } from '../pages/demo/icon/icon.component';
import { DataFlowComponent } from '../pages/demo/data-flow/dataflow.component';
import { EdgeGroupComponent } from '../pages/demo/edge-group/edgegroup.component';
import { TreeComponent } from '../pages/demo/tree/tree.component';
import { LabelComponent } from '../pages/demo/label/label.component';
import { ToggleGroupComponent } from '../pages/demo/togglegroup/togglegroup.component';
import { MultipleLineComponent } from '../pages/demo/multiple-line/multipleLIne.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'prefix',
        children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'welcome', component: WelcomeComponent, pathMatch: 'prefix' },
            {
                path: 'basic',
                component: DemoComponent,
                data: {
                    breadcrumb: 'Basic'
                },
                pathMatch: 'prefix',
                children: [
                    {
                        path: '',
                        component: SimpleComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'base',
                        component: SimpleComponent,
                        data: {
                            breadcrumb: 'Base'
                        },
                    },
                    {
                        path: 'customize',
                        component: ElementComponent,
                        data: {
                            breadcrumb: 'Customize node and link style'
                        },
                    },
                    {
                        path: 'label',
                        component: LabelComponent,
                        data: {
                            breadcrumb: `Set Node's Label and Icon`
                        },
                    },
                    {
                        path: 'icon',
                        component: IconComponent,
                        data: {
                            breadcrumb: 'Register New Icon'
                        },
                    },
                    {
                        path: 'addpicture',
                        component: AddPictureComponent,
                        data: {
                            breadcrumb: 'Add Picture on Node'
                        },
                    },
                ]
            },
            {
                path: 'group',
                component: DemoComponent,
                data: {
                    breadcrumb: 'Group'
                },
                pathMatch: 'prefix',
                children: [
                    {
                        path: '',
                        component: GroupComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'add',
                        component: GroupComponent,
                        data: {
                            breadcrumb: 'Add Group'
                        },
                    },
                    {
                        path: 'toggle',
                        component: ToggleGroupComponent,
                        data: {
                            breadcrumb: 'Toggle Group'
                        },
                    },
                    {
                        path: 'edgegroup',
                        component: EdgeGroupComponent,
                        data: {
                            breadcrumb: 'Edge Group'
                        },
                    }
                ]
            },
            {
                path: 'path',
                component: DemoComponent,
                data: {
                    breadcrumb: 'Path'
                },
                pathMatch: 'prefix',
                children: [
                    {
                        path: '',
                        component: EdgeComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'add',
                        component: EdgeComponent,
                        data: {
                            breadcrumb: 'Add Path'
                        },
                    },
                    {
                        path: 'multi',
                        component: MultiPathComponent,
                        data: {
                            breadcrumb: 'Add Multiple Path'
                        },
                    },
                    {
                        path: 'multiple',
                        component: MultipleLineComponent,
                        data: {
                            breadcrumb: 'Multiple Line'
                        }
                    },
                    {
                        path: 'dataflow',
                        component: DataFlowComponent,
                        data: {
                            breadcrumb: 'Data Flow'
                        },
                    },
                    {
                        path: 'tree',
                        component: TreeComponent,
                        data: {
                            breadcrumb: 'Tree'
                        },
                    },
                ]
            }
        ]
    },
];
export const appRouter: any = RouterModule.forRoot(routes, { useHash: true });
