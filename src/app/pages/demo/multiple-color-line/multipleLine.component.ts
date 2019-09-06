import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-multipleLine',
    templateUrl: './multipleLine.component.html',
    styleUrls: ['./multipleLine.component.less']
})
export class MultipleLineComponent implements OnInit {

    static data = {
        devices: [
            {
                name: 'name-1',
                location: {
                    x: 200,
                    y: 200,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },
            {
                name: 'name-2',
                location: {
                    x: 200,
                    y: 500,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },
            {
                name: 'name-3',
                location: {
                    x: 500,
                    y: 200,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },
            {
                name: 'name-4',
                location: {
                    x: 500,
                    y: 500,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },
        ],
        links: [
            {
                name: '1',
                local_host: 'name-1',
                remote_host: 'name-2',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0Xa3d89f,
                    bundleStyle: 0,
                },
            },
            {
                name: '2',
                local_host: 'name-1',
                remote_host: 'name-2',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                    bundleStyle: 0,
                },
            },
            {
                name: '3',
                local_host: 'name-3',
                remote_host: 'name-4',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '4',
                local_host: 'name-3',
                remote_host: 'name-4',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '5',
                local_host: 'name-3',
                remote_host: 'name-4',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '6',
                local_host: 'name-3',
                remote_host: 'name-4',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '7',
                local_host: 'name-1',
                remote_host: 'name-2',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0Xa3d89f,
                    bundleStyle: 0,
                },
            },
            {
                name: '8',
                local_host: 'name-1',
                remote_host: 'name-2',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                    bundleStyle: 0,
                },
            },
        ],
        groups: [],
    };
    constructor(
        public commonService: CommonService,
    ) { }

    ngOnInit() {
        this.renderTopo();
    }

    public renderTopo() {
        const network = new TopoNetwork(
            'network',
            this.commonService,
        );
        network.drawNoIConTopology(MultipleLineComponent.data);
        network.network.setBundleExpanded(true);
    }
}
