import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
@NgModule({
    imports: [RouterModule, appRouter, HeaderModule],
    exports: [],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent]
})
export class HomeModule {

}
