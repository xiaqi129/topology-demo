import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
    selector: 'app-dataflow',
    templateUrl: './dataflow.component.html',
    styleUrls: ['./dataflow.component.less']
})
export class DataFlowComponent implements OnInit {

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
                    x: 350,
                    y: 250,
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
                    y: 320,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },
            {
                name: 'name-4',
                location: {
                    x: 430,
                    y: 450,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },
            {
                name: 'name-5',
                location: {
                    x: 270,
                    y: 500,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },
            {
                name: 'name-6',
                location: {
                    x: 150,
                    y: 400,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },
            {
                name: 'name-7',
                location: {
                    x: 50,
                    y: 300,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },
            {
                name: 'name-8',
                location: {
                    x: 0,
                    y: 500,
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
            },

        ],
        dataFlows: [
            {
                name: '1',
                local_host: 'name-1',
                remote_host: 'name-2',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0xEEEEEE,
                },
            },
            {
                name: '2',
                local_host: 'name-2',
                remote_host: 'name-3',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0xEEEEEE,
                },
            },
            {
                name: '4',
                local_host: 'name-7',
                remote_host: 'name-1',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0xEEEEEE,
                },
            },
            {
                name: '7',
                local_host: 'name-3',
                remote_host: 'name-6',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0xEEEEEE,
                },
            },
            {
                name: '11',
                local_host: 'name-6',
                remote_host: 'name-7',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0xEEEEEE,
                },
            },
        ],
        links: [
            {
                name: '3',
                local_host: 'name-1',
                remote_host: 'name-4',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '5',
                local_host: 'name-2',
                remote_host: 'name-4',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '6',
                local_host: 'name-3',
                remote_host: 'name-7',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '8',
                local_host: 'name-3',
                remote_host: 'name-8',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '9',
                local_host: 'name-3',
                remote_host: 'name-4',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '10',
                local_host: 'name-6',
                remote_host: 'name-5',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '12',
                local_host: 'name-6',
                remote_host: 'name-8',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '13',
                local_host: 'name-5',
                remote_host: 'name-8',
                style: {
                    fillColor: 0Xa3d89f,
                    lineColor: 0Xa3d89f,
                },
            },
            {
                name: '14',
                local_host: 'name-7',
                remote_host: 'name-8',
                style: {
                    fillColor: 0Xfcc242,
                    lineColor: 0Xa3d89f,
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
        network.drawNoIConTopology(DataFlowComponent.data);
    }
}
