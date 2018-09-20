import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    ];
export const appRouter: any = RouterModule.forRoot(routes, { useHash: true });
