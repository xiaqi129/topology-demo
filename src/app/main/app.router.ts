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
import { ZoomComponent } from '../pages/demo/zoom/zoom.component';
import { TooltipComponent } from '../pages/demo/tooltip/tooltip.component';
import { LabelComponent } from '../pages/demo/label/label.component';
import { BundleComponent } from '../pages/demo/bundle/bundle.component';
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

                    { path: 'edge', component: EdgeComponent, pathMatch: 'prefix' },
                    { path: 'zoom', component: ZoomComponent, pathMatch: 'prefix' },
                    { path: 'tooltip', component: TooltipComponent, pathMatch: 'prefix' },
                    { path: 'label', component: LabelComponent, pathMatch: 'prefix' },
                    { path: 'bundle', component: BundleComponent, pathMatch: 'prefix' }
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
                ]
            }
        ]
    },
];
export const appRouter: any = RouterModule.forRoot(routes, { useHash: true });
