import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouter } from './app.router';
import { AppComponent } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { IndexModule } from '../pages/index/index.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        appRouter,
        HomeModule,
        IndexModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
