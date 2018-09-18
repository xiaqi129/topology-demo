import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouter } from '../../main/app.router';
import { TestComponent } from './test.component';
@NgModule({
    imports: [RouterModule, AppRouter],
    exports: [],
    declarations: [TestComponent],
    entryComponents: [TestComponent]
})
export class TestModule {

}
