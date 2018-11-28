import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { HeaderComponent } from './header.component';
@NgModule({
    imports: [RouterModule, appRouter],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    entryComponents: [HeaderComponent]
})
export class HeaderModule {

}
