import { Component, OnInit } from '@angular/core';
import { CommonService } from '../demo/common/common-service';

@Component({
    selector: 'app-lefttool',
    templateUrl: './lefttool.html',
    styleUrls: ['./lefttool.style.less']
})
export class LeftToolComponent implements OnInit {
    public network: any;
    private isDrag: boolean = true;
    constructor(
        private commonService: CommonService,
    ) { }
    ngOnInit() {
        this.commonService.currentNetork.subscribe(network => this.network = network);
        this.setStyle();
    }

    public setSelect() {
        this.isDrag = false;
        this.setStyle();
        this.network.setSelect();
    }

    public setDrag() {
        this.isDrag = true;
        this.setStyle();
        this.network.setDrag();
    }

    public moveCenter() {
        this.network.moveCenter();
    }

    private setStyle() {
        const select = document.getElementById('select');
        const drag = document.getElementById('drag');
        if (this.isDrag) {
            select.style.backgroundColor = 'transparent';
            drag.style.backgroundColor = '#1e90ff';
        } else {
            select.style.backgroundColor = '#1e90ff';
            drag.style.backgroundColor = 'transparent';
        }
    }

}
