import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../main/app.router';
import { IndexComponent } from './index.component';
@NgModule({
    imports: [RouterModule, appRouter],
    exports: [],
    declarations: [IndexComponent],
    entryComponents: [IndexComponent]
})
export class IndexModule {

}
