import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import { IndexComponent } from '../pages/index/index.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'index',
        component: IndexComponent,
        pathMatch: 'full',
    }
    ];
export const appRouter: any = RouterModule.forRoot(routes, { useHash: true });
