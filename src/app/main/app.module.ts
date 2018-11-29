import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouter } from './app.router';
import { AppComponent } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { DemoModule } from '../pages/demo/demo.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../pages/welcome/welcome.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        appRouter,
        HomeModule,
        DemoModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
