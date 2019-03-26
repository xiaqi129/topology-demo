import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DemoModule } from '../pages/demo/demo.module';
import { HomeModule } from '../pages/home/home.module';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { AppComponent } from './app.component';
import { appRouter } from './app.router';

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule,
        appRouter,
        HomeModule,
        DemoModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
