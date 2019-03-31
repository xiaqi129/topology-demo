import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
  selector: 'app-multipath',
  templateUrl: './multipath.component.html',
  styleUrls: ['./multipath.component.less']
})
export class MultiPathComponent implements OnInit {

  static data = {
    devices: [
      {
        'name': '1',
        'location': {
          'x': 0,
          'y': 250,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 10,
        },
      },
      {
        'name': '2',
        'location': {
          'x': 130,
          'y': 130,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 10,
        },
      },
      {
        'name': '3',
        'location': {
          'x': 420,
          'y': 220,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 10,
        },
      },
      {
        'name': '4',
        'location': {
          'x': 350,
          'y': 100,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 10,
        },
      },
      {
        'name': '5',
        'location': {
          'x': 550,
          'y': 140,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 10,
        },
      },
      {
        'name': '6',
        'location': {
          'x': 600,
          'y': 250,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 10,
        },
      },
      {
        'name': '7',
        'location': {
          'x': 470,
          'y': 350,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 10,
        },
      },
      {
        'name': '8',
        'location': {
          'x': 270,
          'y': 350,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 10,
        },
      },
      {
        'name': '9',
        'location': {
          'x': 70,
          'y': 400,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 10,
        },
      },

    ],
    links: [
      {
        'local_host': '1',
        'remote_host': '2',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
        }
      },
      {
        'local_host': '2',
        'remote_host': '3',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
          arrowColor: 0X20c1a1,
          arrowAngle: 25,
          arrowMiddleLength: 15,
          arrowLength: 20,
          arrowType: 0,
          lineColor: 0X20c1a1,
        }
      },
      {
        'local_host': '3',
        'remote_host': '4',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
        }
      },
      {
        'local_host': '4',
        'remote_host': '5',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
        }
      },
      {
        'local_host': '5',
        'remote_host': '6',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
          arrowColor: 0Xef5050,
          arrowAngle: 25,
          arrowMiddleLength: 15,
          arrowLength: 20,
          arrowType: 0,
          lineColor: 0Xef5050,
        }
      },
      {
        'local_host': '6',
        'remote_host': '7',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
        }
      },
      {
        'local_host': '3',
        'remote_host': '8',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
          arrowColor: 0Xfcc346,
          arrowAngle: 25,
          arrowMiddleLength: 15,
          arrowLength: 20,
          arrowType: 0,
          lineColor: 0Xfcc346,
        }
      },
      {
        'local_host': '8',
        'remote_host': '9',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
        }
      },
      {
        'local_host': '9',
        'remote_host': '1',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
        }
      },
      {
        'local_host': '3',
        'remote_host': '7',
        'label': false,
        'tooltip': false,
        'style': {
          lineWidth: 2.5,
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
    network.drawNoIConTopology(MultiPathComponent.data);
  }

}
