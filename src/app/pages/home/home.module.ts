import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouter } from '../../main/app.router';
import { HomeComponent } from './home.component';
@NgModule({
    imports: [RouterModule, AppRouter],
    exports: [],
    declarations: [HomeComponent],
    entryComponents: [HomeComponent]
})
export class HomeModule {

}
