import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouter } from './app.router';
import { AppComponent } from './app.component';
import { HomeModule } from '../pages/home/home.module';
import { IndexModule } from '../pages/index/index.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRouter,
        HomeModule,
        IndexModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
