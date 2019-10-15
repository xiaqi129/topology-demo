import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-portChannel',
    templateUrl: './portChannel.component.html',
    styleUrls: ['./portChannel.component.less']
})
export class PortChannelComponent implements OnInit {

    static data = {
        devices: [
            {
                name: 'name-1',
                location: {
                    x: 151,
                    y: 396.5
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-2',
                location: {
                    x: 480,
                    y: 508.5
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-3',
                location: {
                    x: 467,
                    y: 268.5
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-4',
                location: {
                    x: 1019,
                    y: 371.5
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-5',
                location: {
                    x: 700,
                    y: 375.5
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
        ],
        links: [
            {
                local_host: 'name-1',
                remote_host: 'name-2',
                label: false,
                tooltip: false,
                name: 'line1',
                style: {
                    lineWidth: 2,
                    bundleStyle: 0,
                }
            },
            {
                local_host: 'name-1',
                remote_host: 'name-3',
                label: false,
                tooltip: false,
                name: 'line2',
                style: {
                    lineWidth: 2,
                    bundleStyle: 0,
                }
            },
            {
                local_host: 'name-1',
                remote_host: 'name-2',
                label: false,
                tooltip: false,
                name: 'line3',
                style: {
                    lineWidth: 2,
                    bundleStyle: 0,
                }
            },
            {
                local_host: 'name-1',
                remote_host: 'name-3',
                label: false,
                tooltip: false,
                name: 'line4',
                style: {
                    lineWidth: 2,
                    bundleStyle: 0,
                }
            },
            {
                local_host: 'name-4',
                remote_host: 'name-5',
                label: false,
                tooltip: false,
                name: 'line5',
                style: {
                    lineWidth: 2,
                    bundleStyle: 0,
                }
            },
            {
                local_host: 'name-4',
                remote_host: 'name-5',
                label: false,
                tooltip: false,
                name: 'line6',
                style: {
                    lineWidth: 2,
                    bundleStyle: 0,
                }
            },
            {
                local_host: 'name-4',
                remote_host: 'name-5',
                label: false,
                tooltip: false,
                name: 'line7',
                style: {
                    lineWidth: 2,
                    bundleStyle: 0,
                }
            },
            {
                local_host: 'name-4',
                remote_host: 'name-5',
                label: false,
                tooltip: false,
                name: 'line8',
                style: {
                    lineWidth: 2,
                    bundleStyle: 0,
                }
            },
        ],
        portChannel: [
            {
                name: 'channel-1',
                content: 'Port Channel 1',
                ratio: '0.3',
                lines: ['line1', 'line2', 'line3', 'line4'],
            },
            {
                name: 'channel-2',
                content: 'Port Channel 2',
                ratio: '0.3',
                lines: ['line5', 'line6', 'line7', 'line8'],
            },
        ],
        groups: [],
    };

    labelPosition = [
        'center',
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right'
    ];
    selectValue = 'center';
    network;
    constructor(
        public commonService: CommonService,
    ) { }

    ngOnInit() {
        this.renderTopo();
    }

    public renderTopo() {
        this.network = new TopoNetwork(
            'network',
            this.commonService,
        );
        this.network.drawNoIConTopology(PortChannelComponent.data);
        this.network.network.setBundleExpanded(true);
    }

    public selectedChange() {
        const network = this.network.network;
        const portChannels = network.getPortChannel();
        _.each(portChannels, channel => {
            channel.setLabelPosition(this.selectValue);
        });
    }
}
