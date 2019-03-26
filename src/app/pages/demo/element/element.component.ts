import { Component, OnInit } from '@angular/core';
import { Network } from 'src/network/network';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';


@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.less']
})
export class ElementComponent implements OnInit {

  static data = {
    devices: [
      {
        'name': '1',
        'location': {
          'x': 80,
          'y': 400,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xfdc999',
          'width': 10,
        },
      },
      {
        'name': '2',
        'location': {
          'x': 200,
          'y': 230,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xfdc999',
          'width': 23,
        },
      },
      {
        'name': '3',
        'location': {
          'x': 190,
          'y': 420,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xfdc999',
          'width': 25,
        },
      },
      {
        'name': '4',
        'location': {
          'x': 370,
          'y': 500,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xfdc999',
          'width': 13,
        },
      },
      {
        'name': '5',
        'location': {
          'x': 500,
          'y': 280,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xfdc999',
          'width': 10,
        },
      },
      {
        'name': '6',
        'location': {
          'x': 450,
          'y': 200,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xfdc999',
          'width': 25,
        },
      },
      {
        'name': '7',
        'location': {
          'x': 170,
          'y': 600,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa3d89f',
          'width': 25,
        },
      },
      {
        'name': '8',
        'location': {
          'x': 80,
          'y': 650,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa3d89f',
          'width': 8,
        },
      },
      {
        'name': '9',
        'location': {
          'x': 120,
          'y': 680,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa3d89f',
          'width': 15,
        },
      },
      {
        'name': '10',
        'location': {
          'x': 160,
          'y': 700,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa3d89f',
          'width': 7,
        },
      },
      {
        'name': '11',
        'location': {
          'x': 220,
          'y': 720,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa3d89f',
          'width': 32,
        },
      },
      {
        'name': '12',
        'location': {
          'x': 380,
          'y': 650,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa3d89f',
          'width': 13,
        },
      },
      {
        'name': '13',
        'location': {
          'x': 450,
          'y': 450,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa8d4df',
          'width': 25,
        },
      },
      {
        'name': '14',
        'location': {
          'x': 570,
          'y': 380,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa8d4df',
          'width': 10,
        },
      },
      {
        'name': '15',
        'location': {
          'x': 630,
          'y': 450,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa8d4df',
          'width': 8,
        },
      },
      {
        'name': '16',
        'location': {
          'x': 610,
          'y': 570,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa8d4df',
          'width': 25,
        },
      },
      {
        'name': '17',
        'location': {
          'x': 550,
          'y': 700,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa8d4df',
          'width': 22,
        },
      },
    ],
    links: [
      {
        'local_host': '2',
        'remote_host': '1',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '2',
        'remote_host': '3',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '2',
        'remote_host': '4',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '2',
        'remote_host': '5',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '2',
        'remote_host': '6',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '7',
        'remote_host': '8',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 1,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '7',
        'remote_host': '9',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 1,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '7',
        'remote_host': '10',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 1,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '7',
        'remote_host': '11',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 1,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '7',
        'remote_host': '12',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 0,
          'lineFull': 1,
          'lineColor': '0Xdaf0d8',
        }
      },
      {
        'local_host': '13',
        'remote_host': '14',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 0,
          'lineFull': 1,
          'lineColor': '0Xfee8d3',
        }
      },
      {
        'local_host': '13',
        'remote_host': '15',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 0,
          'lineFull': 1,
          'lineColor': '0Xfee8d3',
        }
      },
      {
        'local_host': '13',
        'remote_host': '16',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 0,
          'lineFull': 1,
          'lineColor': '0Xfee8d3',
        }
      },
      {
        'local_host': '13',
        'remote_host': '17',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 0,
          'lineFull': 1,
          'lineColor': '0Xfee8d3',
        }
      },
    ],
    groups: [

    ]
  };

  network: Network;

  constructor(
    public commonService: CommonService,
  ) {
  }

  ngOnInit() {
    this.renderTopo();
  }

  public renderTopo() {
    const network = new TopoNetwork(
      'network',
      this.commonService,
    );
    network.drawNoIConTopology(ElementComponent.data);
  }

}
