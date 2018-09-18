import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouter } from '../../main/app.router';
import { testComponent } from './test.component';
@NgModule({
    imports: [RouterModule, AppRouter],
    exports: [],
    declarations: [testComponent],
    entryComponents: [testComponent]
})
export class TestModule {

}
