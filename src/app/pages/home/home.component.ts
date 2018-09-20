import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './home.html',
    styleUrls: ['./home.style.scss']
}) export class HomeComponent implements OnInit {
    public title: any = 'I am title';
    ngOnInit() {
        console.log('hello');
    }
}
