import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
    selector: 'app-edgegroup',
    templateUrl: './edgegroup.component.html',
    styleUrls: ['./edgegroup.component.less']
})
export class EdgeGroupComponent implements OnInit {
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
        links: [
            {
                name: '1',
                local_host: 'name-1',
                remote_host: 'name-2',
                style: {
                    lineType: 0,
                    lineFull: 0,
                },
            },
            {
                name: '2',
                local_host: 'name-2',
                remote_host: 'name-3',
                style: {
                    lineType: 0,
                    lineFull: 0,
                },
            },
            {
                name: '3',
                local_host: 'name-1',
                remote_host: 'name-4',
                style: {
                    lineType: 1,
                    lineFull: 0,
                },
            },
            {
                name: '4',
                local_host: 'name-1',
                remote_host: 'name-7',
                style: {
                    lineType: 1,
                    lineFull: 0,
                },
            },
            {
                name: '5',
                local_host: 'name-2',
                remote_host: 'name-4',
                style: {
                    lineType: 0,
                    lineFull: 0,
                },
            },
            {
                name: '6',
                local_host: 'name-3',
                remote_host: 'name-7',
                style: {
                    lineType: 1,
                    lineFull: 1,
                },
            },
            {
                name: '7',
                local_host: 'name-3',
                remote_host: 'name-6',
                style: {
                    lineType: 1,
                    lineFull: 1,
                },
            },
            {
                name: '8',
                local_host: 'name-3',
                remote_host: 'name-8',
                style: {
                    lineType: 0,
                    lineFull: 1,
                },
            },
            {
                name: '9',
                local_host: 'name-3',
                remote_host: 'name-4',
                style: {
                    lineType: 0,
                    lineFull: 1,
                },
            },
            {
                name: '10',
                local_host: 'name-6',
                remote_host: 'name-5',
                style: {
                    lineType: 1,
                    lineFull: 0,
                },
            },
            {
                name: '11',
                local_host: 'name-6',
                remote_host: 'name-7',
                style: {
                    lineType: 0,
                    lineFull: 0,
                },
            },
            {
                name: '12',
                local_host: 'name-6',
                remote_host: 'name-8',
                style: {
                    lineType: 1,
                    lineFull: 1,
                },
            },
            {
                name: '13',
                local_host: 'name-5',
                remote_host: 'name-8',
                style: {
                    lineType: 0,
                    lineFull: 0,
                },
            },
            {
                name: '14',
                local_host: 'name-7',
                remote_host: 'name-8',
                style: {
                    lineType: 0,
                    lineFull: 0,
                },
            },

        ],
        edgeGroups: [
            {
                name: 'group1',
                style: {
                    fillColor: 0xf55d54,
                    margin: 8,
                },
                children: ['1'],
            },
            {
                name: 'group2',
                style: {
                    fillColor: 0Xa3d89f,
                    margin: 8,
                },
                children: ['2'],
            },
            {
                name: 'group3',
                style: {
                    fillColor: 0Xfcc242,
                    margin: 8,
                },
                children: ['5'],
            },
            {
                name: 'group4',
                style: {
                    fillColor: 0xf55d54,
                    margin: 8,
                    fillOpacity: 0,
                    lineColor: 0xf55d54,
                },
                children: ['9'],
            },
            {
                name: 'group5',
                style: {
                    fillColor: 0xf55d54,
                    margin: 8,
                    fillOpacity: 0,
                    lineColor: 0Xa378b4,
                    lineWidth: 2,
                },
                children: ['4'],
            },
            {
                name: 'group6',
                style: {
                    fillColor: 0xf55d54,
                    margin: 8,
                    fillOpacity: 0,
                    lineColor: 0Xfcc242,
                    lineWidth: 2,
                },
                // children: ['1', '4', '10', '11', '12', '13', '14'],
                children: ['12', '13'],
            },
            {
                name: 'group7',
                style: {
                    fillColor: 0X0984e3,
                    margin: 8,
                    fillOpacity: 0,
                    lineColor: 0X0984e3,
                    lineWidth: 2,
                },
                children: ['6'],
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
        network.drawNoIConTopology(EdgeGroupComponent.data);
    }

}
