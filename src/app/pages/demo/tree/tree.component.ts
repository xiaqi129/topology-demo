import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit {

    static data = {
        devices: [
            {
                'name': '1',
                'location': {
                    x: 638, y: 231
                },
                'style': {
                    'color': '0Xcbf0c5',
                    'width': 10,
                },
            },
            {
                'name': '2',
                'location': {
                    x: 638, y: 281
                },
                'style': {
                    'color': '0X55efc4',
                    'width': 0,
                },
            },
            {
                'name': '3',
                'location': {
                    x: 538, y: 331
                },
                'style': {
                    'color': '0Xa3d89f',
                    'width': 10,
                },
            },
            {
                'name': '4',
                'location': {
                    x: 738, y: 331
                },
                'style': {
                    'color': '0Xa3d89f',
                    'width': 10,
                },
            },
            {
                'name': '5',
                'location': {
                    x: 638, y: 311
                },
                'style': {
                    'color': '0X80ecec',
                    'width': 0,
                },
            },
            {
                'name': '6',
                'location': {
                    x: 605, y: 323
                },
                'style': {
                    'color': '0Xa3d89f',
                    'width': 10,
                },
            },
            {
                'name': '7',
                'location': {
                    x: 672, y: 325
                },
                'style': {
                    'color': '0Xa3d89f',
                    'width': 10,
                },
            },
            {
                'name': '8',
                'location': {
                    x: 638, y: 341
                },
                'style': {
                    'color': '0X74b9ff',
                    'width': 0,
                },
            },
            {
                'name': '9',
                'location': {
                    x: 588, y: 361
                },
                'style': {
                    'color': '0X87c16f',
                    'width': 10,
                },
            },
            {
                'name': '10',
                'location': {
                    x: 688, y: 361
                },
                'style': {
                    'color': '0X87c16f',
                    'width': 10,
                },
            },
            {
                'name': '11',
                'location': {
                    x: 488, y: 371
                },
                'style': {
                    'color': '0X87c16f',
                    'width': 10,
                },
            },
            {
                'name': '12',
                'location': {
                    x: 788, y: 371
                },
                'style': {
                    'color': '0X87c16f',
                    'width': 10,
                },
            },
            {
                'name': '13',
                'location': {
                    x: 638, y: 371
                },
                'style': {
                    'color': '0X74b9ff',
                    'width': 0,
                },
            },
            {
                'name': '14',
                'location': {
                    x: 605, y: 384
                },
                'style': {
                    'color': '0X95c94b',
                    'width': 10,
                },
            },
            {
                'name': '15',
                'location': {
                    x: 678, y: 389
                },
                'style': {
                    'color': '0X95c94b',
                    'width': 10,
                },
            },
            {
                'name': '16',
                'location': {
                    x: 527, y: 385
                },
                'style': {
                    'color': '0X95c94b',
                    'width': 10,
                },
            },
            {
                'name': '17',
                'location': {
                    x: 750, y: 386
                },
                'style': {
                    'color': '0X95c94b',
                    'width': 10,
                },
            },
            {
                'name': '18',
                'location': {
                    x: 638, y: 401
                },
                'style': {
                    'color': '0Xc1c451',
                    'width': 0,
                },
            },
            {
                'name': '19',
                'location': {
                    x: 579, y: 427
                },
                'style': {
                    'color': '0Xc1c451',
                    'width': 10,
                },
            },
            {
                'name': '20',
                'location': {
                    x: 702, y: 426
                },
                'style': {
                    'color': '0Xc1c451',
                    'width': 10,
                },
            },
            {
                'name': '21',
                'location': {
                    x: 488, y: 431
                },
                'style': {
                    'color': '0Xc1c451',
                    'width': 10,
                },
            },
            {
                'name': '22',
                'location': {
                    x: 788, y: 431
                },
                'style': {
                    'color': '0Xc1c451',
                    'width': 10,
                },
            },
            {
                'name': '23',
                'location': {
                    x: 638, y: 431
                },
                'style': {
                    'color': '0Xc1c451',
                    'width': 0,
                },
            },
            {
                'name': '24',
                'location': {
                    x: 601, y: 447
                },
                'style': {
                    'color': '0Xefe854',
                    'width': 10,
                },
            },
            {
                'name': '25',
                'location': {
                    x: 679, y: 446
                },
                'style': {
                    'color': '0Xefe854',
                    'width': 10,
                },
            },
            {
                'name': '26',
                'location': {
                    x: 525, y: 448
                },
                'style': {
                    'color': '0Xefe854',
                    'width': 10,
                },
            },
            {
                'name': '27',
                'location': {
                    x: 753, y: 446
                },
                'style': {
                    'color': '0Xefe854',
                    'width': 10,
                },
            },
            {
                'name': '28',
                'location': {
                    x: 638, y: 461
                },
                'style': {
                    'color': '0Xc1c451',
                    'width': 0,
                },
            },
            {
                'name': '29',
                'location': {
                    x: 588, y: 481
                },
                'style': {
                    'color': '0Xb3c648',
                    'width': 10,
                },
            },
            {
                'name': '30',
                'location': {
                    x: 688, y: 481
                },
                'style': {
                    'color': '0Xb3c648',
                    'width': 10,
                },
            },
            {
                'name': '31',
                'location': {
                    x: 488, y: 491
                },
                'style': {
                    'color': '0Xb3c648',
                    'width': 10,
                },
            },
            {
                'name': '32',
                'location': {
                    x: 788, y: 491
                },
                'style': {
                    'color': '0Xb3c648',
                    'width': 10,
                },
            },
            {
                'name': '33',
                'location': {
                    x: 638, y: 491
                },
                'style': {
                    'color': '0Xb3c648',
                    'width': 0,
                },
            },
            {
                'name': '34',
                'location': {
                    x: 538, y: 521
                },
                'style': {
                    'color': '0X95c94b',
                    'width': 10,
                },
            },
            {
                'name': '35',
                'location': {
                    x: 738, y: 521
                },
                'style': {
                    'color': '0X95c94b',
                    'width': 10,
                },
            },
            {
                'name': '36',
                'location': {
                    x: 638, y: 546
                },
                'style': {
                    'color': '0X87c16f',
                    'width': 10,
                },
            },

        ],
        links: [
            {
                'local_host': '1',
                'remote_host': '2',
                style: {
                    lineWidth: 2
                }
            },
            {
                'local_host': '2',
                'remote_host': '3',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '2',
                'remote_host': '4',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '2',
                'remote_host': '5',
                style: {
                    lineWidth: 2
                }
            },
            {
                'local_host': '5',
                'remote_host': '6',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '5',
                'remote_host': '7',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '5',
                'remote_host': '8',
                style: {
                    lineWidth: 2
                }
            },
            {
                'local_host': '8',
                'remote_host': '9',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '8',
                'remote_host': '10',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '5',
                'remote_host': '11',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '5',
                'remote_host': '12',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '8',
                'remote_host': '13',
                style: {
                    lineWidth: 2
                }
            },
            {
                'local_host': '13',
                'remote_host': '14',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '13',
                'remote_host': '15',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '8',
                'remote_host': '16',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '8',
                'remote_host': '17',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '13',
                'remote_host': '18',
                style: {
                    lineWidth: 2
                }
            },
            {
                'local_host': '18',
                'remote_host': '19',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '18',
                'remote_host': '20',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '13',
                'remote_host': '21',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '13',
                'remote_host': '22',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '18',
                'remote_host': '23',
                style: {
                    lineWidth: 2
                }
            },
            {
                'local_host': '23',
                'remote_host': '24',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '23',
                'remote_host': '25',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '18',
                'remote_host': '26',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '18',
                'remote_host': '27',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '23',
                'remote_host': '28',
                style: {
                    lineWidth: 2
                }
            },
            {
                'local_host': '28',
                'remote_host': '29',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '28',
                'remote_host': '30',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '23',
                'remote_host': '31',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '23',
                'remote_host': '32',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '28',
                'remote_host': '33',
                style: {
                    lineWidth: 2
                }
            },
            {
                'local_host': '33',
                'remote_host': '34',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '33',
                'remote_host': '35',
                style: {
                    lineWidth: 1
                }
            },
            {
                'local_host': '33',
                'remote_host': '36',
                style: {
                    lineWidth: 2
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
        network.drawNoIConTopology(TreeComponent.data);
    }
}
