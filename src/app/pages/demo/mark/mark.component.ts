import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
    selector: 'app-mark',
    templateUrl: './mark.component.html',
    styleUrls: ['./mark.component.less']
}) export class MarkComponent implements OnInit {
    static data = {
        devices: [
            {
                'name': '192.168.10.0/24',
                'location': {
                    x: 561.9284504968713, y: 320.81842105263155
                },
                'label': true,
                'tooltip': true,
                'style': {
                    'color': '0Xc9d4f7',
                    'width': 20,
                },
                'clients': {
                    'User_Manufacturer': 'Cisco',
                    'platform': 'WS-C3650-24TD',
                    'deviceIP': '10.250.0.249',
                    'device_source': 'from collected',
                },
                mark: {
                    content: 'R',
                    color: 0XFFC125,
                    alpha: 0.7,
                }
            },
            {
                'name': '172.17.16.134',
                'location': {
                    x: 731.9284504968707, y: 201.81842105263163
                },
                'label': true,
                'tooltip': true,
                'style': {
                    'color': '0X55efc4',
                    'width': 20,
                },
                'clients': {
                    'User_Manufacturer': 'Cisco',
                    'platform': 'WS-C3650-24TD',
                    'deviceIP': '10.250.0.249',
                    'device_source': 'from collected',
                },
                mark: {
                    content: 'A',
                    color: 0Xc9d4f7,
                    alpha: 0.7,
                }
            },
            {
                'name': '192.168.18.253',
                'location': {
                    x: 986.9284504968696, y: 235.81842105263146
                },
                'label': true,
                'tooltip': true,
                'style': {
                    'color': '0X74b9ff',
                    'width': 20,
                },
                'clients': {
                    'User_Manufacturer': 'Cisco',
                    'platform': 'WS-C3650-24TD',
                    'deviceIP': '10.250.0.249',
                    'device_source': 'from collected',
                },
                mark: {
                    content: 'TM',
                    color: 0X55efc4,
                    alpha: 0.7,
                }
            },
            {
                'name': '172.17.17.86',
                'location': {
                    x: 1241.9284504968705, y: 354.8184210526315
                },
                'label': true,
                'tooltip': true,
                'style': {
                    'color': '0Xa09bfd',
                    'width': 20,
                },
                'clients': {
                    'User_Manufacturer': 'Cisco',
                    'platform': 'WS-C3650-24TD',
                    'deviceIP': '10.250.0.249',
                    'device_source': 'from collected',
                },
                mark: {
                    content: 'PS',
                    color: 0X74b9ff,
                    alpha: 0.7,
                }
            },
            {
                'name': '192.168.18.229',
                'location': {
                    x: 1122.9284504968705, y: 575.8184210526309
                },
                'label': true,
                'tooltip': true,
                'style': {
                    'color': '0X80ecec',
                    'width': 20,
                },
                'clients': {
                    'User_Manufacturer': 'Cisco',
                    'platform': 'WS-C3650-24TD',
                    'deviceIP': '10.250.0.249',
                    'device_source': 'from collected',
                },
                mark: {
                    content: 'FS',
                    color: 0Xa09bfd,
                    alpha: 0.7,
                }
            },

        ],
        links: [
            {
                'local_host': '192.168.10.0/24',
                'link_protocol': 'Subnet',
                'remote_int': 'Po1(Te1/0/1)',
                'local_int': '192.168.12.63',
                'link_state': 'normal',
                'remote_host': '172.17.16.134',
                'label': true,
                'tooltip': true,
                mark: {
                    src: {
                        content: 'B',
                        color: 0Xef5050,
                    },
                }
            },
            {
                'local_host': '172.17.16.134',
                'link_protocol': 'Subnet',
                'remote_int': 'Po1(Te1/0/1)',
                'local_int': '192.168.12.63',
                'link_state': 'normal',
                'remote_host': '192.168.18.253',
                'label': true,
                'tooltip': true,
                mark: {
                    end: {
                        content: 'F',
                        color: 0X20c1a1,
                    }
                }
            },
            {
                'local_host': '192.168.18.253',
                'link_protocol': 'Subnet',
                'remote_int': 'Po1(Te1/0/1)',
                'local_int': '192.168.12.63',
                'link_state': 'normal',
                'remote_host': '172.17.17.86',
                'label': true,
                'tooltip': true,
                mark: {
                    src: {
                        content: 'T',
                        color: 0Xfcc242,
                    },
                }
            },
            {
                'local_host': '172.17.17.86',
                'link_protocol': 'Subnet',
                'remote_int': 'Po1(Te1/0/1)',
                'local_int': '192.168.12.63',
                'link_state': 'normal',
                'remote_host': '192.168.18.229',
                'label': true,
                'tooltip': true,
                mark: {
                    src: {
                        content: 'T',
                        color: 0Xfcc242,
                    },
                    end: {
                        content: 'F',
                        color: 0X20c1a1,
                    }
                }
            },
            {
                'local_host': '172.17.16.134',
                'link_protocol': 'Subnet',
                'remote_int': 'Po1(Te1/0/1)',
                'local_int': '192.168.12.63',
                'link_state': 'normal',
                'remote_host': '192.168.18.229',
                'label': true,
                'tooltip': true,
                mark: {
                    src: {
                        content: 'T',
                        color: 0Xfcc242,
                    },
                    end: {
                        content: 'B',
                        color: 0Xef5050,
                    }
                }
            },
            {
                'local_host': '192.168.18.253',
                'link_protocol': 'Subnet',
                'remote_int': 'Po1(Te1/0/1)',
                'local_int': '192.168.12.63',
                'link_state': 'normal',
                'remote_host': '192.168.18.229',
                'label': true,
                'tooltip': true,
                mark: {
                    end: {
                        content: 'F',
                        color: 0X20c1a1,
                    }
                }
            },
            {
                'local_host': '192.168.10.0/24',
                'link_protocol': 'Subnet',
                'remote_int': 'Po1(Te1/0/1)',
                'local_int': '192.168.12.63',
                'link_state': 'normal',
                'remote_host': '172.17.17.86',
                'label': true,
                'tooltip': true,
                mark: {
                    src: {
                        content: 'T',
                        color: 0Xfcc242,
                    },
                }
            },

        ],
        groups: [

        ]
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
        network.drawNoIConTopology(MarkComponent.data);
    }
}
