import { Component, OnInit } from '@angular/core';
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
          x: 321.9618495396206,
          y: 168.83811558314733
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
          x: 393.9618495396206,
          y: 66.83811558314733
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
          x: 387.96184953962063,
          y: 180.83811558314733
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
          x: 495.96184953962063,
          y: 228.83811558314733
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
          x: 573.9618495396207,
          y: 96.83811558314736
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
          x: 543.9618495396207,
          y: 48.83811558314733
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
          x: 375.9618495396206,
          y: 270.8381155831473
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
          x: 321.9618495396206,
          y: 300.8381155831473
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
          x: 345.9618495396206,
          y: 318.8381155831473
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
          x: 369.9618495396206,
          y: 330.8381155831473
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
          x: 423.9618495396206,
          y: 342.8381155831473
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa3d89f',
          'width': 34,
        },
      },
      {
        'name': '12',
        'location': {
          x: 501.9618495396207,
          y: 300.8381155831473
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
          x: 543.9618495396207,
          y: 198.83811558314733
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
          x: 615.9618495396207,
          y: 156.83811558314733
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
          x: 651.9618495396207,
          y: 198.83811558314733
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
          x: 639.9618495396207,
          y: 270.8381155831473
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
          x: 603.9618495396207,
          y: 348.8381155831473
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
