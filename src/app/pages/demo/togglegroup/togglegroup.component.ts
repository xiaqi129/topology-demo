import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
    selector: 'app-togglegroup',
    templateUrl: './togglegroup.component.html',
    styleUrls: ['./togglegroup.component.less']
})
export class ToggleGroupComponent implements OnInit {
    static data = {
        devices: [
            {
                'name': 'name-1',
                'location': {
                    'x': 200,
                    'y': 200,
                },
                'label': true,
                'tooltip': false,
                'style': {
                    'color': '0X74b9ff',
                    'width': 20,
                },
            },
            {
                'name': 'name-2',
                'location': {
                    'x': 350,
                    'y': 250,
                },
                'label': true,
                'tooltip': false,
                'style': {
                    'color': '0X55efc4',
                    'width': 20,
                },
            },
            {
                'name': 'name-3',
                'location': {
                    'x': 500,
                    'y': 320,
                },
                'label': true,
                'tooltip': false,
                'style': {
                    'color': '0Xacbfeb',
                    'width': 20,
                },
            },
            {
                'name': 'name-4',
                'location': {
                    'x': 430,
                    'y': 450,
                },
                'label': true,
                'tooltip': false,
                'style': {
                    'color': '0X0984e3',
                    'width': 20,
                },
            },
            {
                'name': 'name-5',
                'location': {
                    'x': 270,
                    'y': 500,
                },
                'label': true,
                'tooltip': false,
                'style': {
                    'color': '0Xfcc242',
                    'width': 20,
                },
            },
            {
                'name': 'name-6',
                'location': {
                    'x': 150,
                    'y': 400,
                },
                'label': true,
                'tooltip': false,
                'style': {
                    'color': '0Xa378b4',
                    'width': 20,
                },
            },
            {
                'name': 'name-7',
                'location': {
                    'x': 50,
                    'y': 300,
                },
                'label': true,
                'tooltip': false,
                'style': {
                    'color': '0X55a6cb',
                    'width': 20,
                },
            },
            {
                'name': 'name-8',
                'location': {
                    'x': 0,
                    'y': 500,
                },
                'label': true,
                'tooltip': false,
                'style': {
                    'color': '0Xa3d89f',
                    'width': 20,
                },
            },

        ],
        links: [
            {
                'local_host': 'name-1',
                'remote_host': 'name-2',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-2',
                'remote_host': 'name-3',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-1',
                'remote_host': 'name-4',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-1',
                'remote_host': 'name-7',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-2',
                'remote_host': 'name-4',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-3',
                'remote_host': 'name-7',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-3',
                'remote_host': 'name-6',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-3',
                'remote_host': 'name-8',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-3',
                'remote_host': 'name-4',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-6',
                'remote_host': 'name-5',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-6',
                'remote_host': 'name-7',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-6',
                'remote_host': 'name-8',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-5',
                'remote_host': 'name-8',
                'label': true,
                'tooltip': false,
            },
            {
                'local_host': 'name-7',
                'remote_host': 'name-8',
                'label': true,
                'tooltip': false,
            },

        ],
        groups: {
            'Double': {
                'display_style': 'Ellipse',
                'name': 'Double',
                'label': true,
                'style': {
                    'fillColor': '0Xf4f6fd',
                    // 'width': '50',
                },
                'label_position': 'Center',
                'children': [
                    'name-5', 'name-6', 'name-7', 'name-8'
                ],
                'toggle': true,
            },
            'Click': {
                'display_style': 'Ellipse',
                'name': 'Click',
                'label': true,
                'style': {
                    'fillColor': '0Xf5e9eb',
                    // 'width': '50',
                },
                'label_position': 'Center',
                'children': [
                    'name-1', 'name-2', 'name-3', 'name-4',
                ],
                'toggle': true,
            },
        }
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
        network.drawNoIConTopology(ToggleGroupComponent.data);
        const groups = network.network.getGroupObj();
        _.each(groups, (group) => {
            group.on('click', () => {
                network.network.reDraw();
            });
        });
    }

}
