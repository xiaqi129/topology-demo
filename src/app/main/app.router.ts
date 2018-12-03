import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { DemoComponent } from '../pages/demo/demo.component';

import { SimpleComponent } from '../pages/demo/simple/simple.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { ElementComponent } from '../pages/demo/element/element.component';
import { GroupComponent } from '../pages/demo/group/group.component';
import { EdgeComponent } from '../pages/demo/edge/edge.component';
import { SelectComponent } from '../pages/demo/select/select.component';
import { DragComponent } from '../pages/demo/drag/drag.component';
import { IconComponent } from '../pages/demo/icon/icon.component';
import { ZoomComponent } from '../pages/demo/zoom/zoom.component';
import { TooltipComponent } from '../pages/demo/tooltip/tooltip.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'prefix',
        children: [
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full',
            },
            {
                path: 'welcome',
                component: WelcomeComponent,
                pathMatch: 'prefix',
            },
            {
                path: 'demo',
                component: DemoComponent,
                pathMatch: 'prefix',
                children: [
                    {
                        path: '',
                        redirectTo: 'simple',
                        pathMatch: 'full',
                    },
                    {
                        path: 'simple',
                        component: SimpleComponent,
                        pathMatch: 'prefix',
                    },
                    {
                        path: 'element',
                        component: ElementComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'group',
                        component: GroupComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'edge',
                        component: EdgeComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'select',
                        component: SelectComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'drag',
                        component: DragComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'icon',
                        component: IconComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'zoom',
                        component: ZoomComponent,
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'tooltip',
                        component: TooltipComponent,
                        pathMatch: 'prefix'
                    }
                ]
            }
        ]
    },
];
export const appRouter: any = RouterModule.forRoot(routes, { useHash: true });
