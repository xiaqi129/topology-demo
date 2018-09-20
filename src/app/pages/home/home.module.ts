import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { HomeComponent } from './home.component';
@NgModule({
    imports: [RouterModule, appRouter],
    exports: [],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent]
})
export class HomeModule {

}
