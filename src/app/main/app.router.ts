import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { DemoComponent } from '../pages/demo/demo.component';

import { SimpleComponent } from '../pages/demo/simple/simple.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
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
                    }
                ]
            }
        ]
    },
];
export const appRouter: any = RouterModule.forRoot(routes, { useHash: true });
