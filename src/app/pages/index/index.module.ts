import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouter } from '../../main/app.router';
import { IndexComponent } from './index.component';
@NgModule({
    imports: [RouterModule, AppRouter],
    exports: [],
    declarations: [IndexComponent],
    entryComponents: [IndexComponent]
})
export class IndexModule {

}
