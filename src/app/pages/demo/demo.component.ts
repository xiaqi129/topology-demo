
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './demo.html',
    styleUrls: ['./demo.style.less']
}) export class DemoComponent implements OnInit {
    constructor() {
        console.log('in DemoComponent');
    }

    ngOnInit() {
    }
}
