import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRouter } from '../../../main/app.router';
import { SimpleComponent } from './simple.component';
@NgModule({
    imports: [RouterModule, appRouter],
    exports: [SimpleComponent],
    declarations: [SimpleComponent],
    entryComponents: [SimpleComponent]
})
export class SimpleModule {

}
