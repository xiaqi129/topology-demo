import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.less']
})
export class GroupComponent implements OnInit {
  static data = {
    devices: [
      {
        'name': '1',
        'location': {
          x: 238.88337402216263,
          y: 235.78330620639008,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X55a6cb',
          'width': 15,
        },
      },
      {
        'name': '2',
        'location': {
          x: 217.88337402211022,
          y: 375.78330620674,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xa4d8a0',
          'width': 15,
        },
      },
      {
        'name': '3',
        'location': {
          x: 308.88337402233765,
          y: 305.7833062065651
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xfab1a0',
          'width': 15,
        },
      },
      {
        'name': '4',
        'location': {
          x: 378.8833740225127,
          y: 375.78330620674
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xfcc242',
          'width': 15,
        },
      },
      {
        'name': '5',
        'location': {
          x: 343.8833740224252,
          y: 200.7833062063026
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 15,
        },
      },
      {
        'name': '6',
        'location': {
          x: 448.8833740226876,
          y: 228.7833062063726
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X00cec9',
          'width': 15,
        },
      },
      {
        'name': '7',
        'location': {
          x: 553.8833740229504,
          y: 284.78330620651263
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xadc0eb',
          'width': 15,
        },
      },
      {
        'name': '8',
        'location': {
          x: 469.8833740227402,
          y: 361.7833062067051
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X0984e3',
          'width': 15,
        },
      },
      {
        'name': '9',
        'location': {
          x: 679.8833740232652,
          y: 305.7833062065651
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X00cec9',
          'width': 15,
        },
      },
      {
        'name': '10',
        'location': {
          x: 763.8833740234752,
          y: 375.78330620674
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xa09bfd',
          'width': 15,
        },
      },
      {
        'name': '11',
        'location': {
          x: 847.8833740236854,
          y: 445.78330620691514
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xb3bec5',
          'width': 15,
        },
      },
      {
        'name': '12',
        'location': {
          x: 812.8833740235979,
          y: 214.78330620633758
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X6d5ce7',
          'width': 15,
        },
      },
      {
        'name': '13',
        'location': {
          x: 924.8833740238779,
          y: 319.7833062066002
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xffeaa9',
          'width': 15,
        },
      },
      {
        'name': '14',
        'location': {
          x: 1008.883374024088,
          y: 361.7833062067051
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xfdca6d',
          'width': 15,
        },
      },
      {
        'name': '15',
        'location': {
          x: 1148.8833740244377,
          y: 480.7833062070026
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xe17154',
          'width': 15,
        },
      },
      {
        'name': '16',
        'location': {
          x: 938.8833740239131,
          y: 235.78330620639008
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xfab1a0',
          'width': 15,
        },
      },
      {
        'name': '17',
        'location': {
          x: 1001.8833740240705,
          y: 158.7833062061976
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xfe7777',
          'width': 15,
        },
      },
      {
        'name': '18',
        'location': {
          x: 1169.8833740244904,
          y: 214.78330620633758
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xfd7aa8',
          'width': 15,
        },
      },
      {
        'name': '19',
        'location': {
          x: 1162.8833740244736,
          y: 319.7833062066002
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X626e73',
          'width': 15,
        },
      },
      {
        'name': '20',
        'location': {
          x: 1323.883374024876,
          y: 179.78330620625007
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xb3c648',
          'width': 15,
        },
      },
      {
        'name': '21',
        'location': {
          x: 1274.8833740247526,
          y: 284.78330620651263
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xcbf0c5',
          'width': 15,
        },
      },
      {
        'name': '22',
        'location': {
          x: 1323.883374024876,
          y: 375.78330620674
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xe94394',
          'width': 15,
        },
      },
    ],
    links: [
      {
        'local_host': '1',
        'remote_host': '2',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '1',
        'remote_host': '3',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '2',
        'remote_host': '3',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '2',
        'remote_host': '4',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '3',
        'remote_host': '4',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '2',
        'remote_host': '7',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '1',
        'remote_host': '5',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '1',
        'remote_host': '7',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '3',
        'remote_host': '7',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '5',
        'remote_host': '6',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '6',
        'remote_host': '7',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '5',
        'remote_host': '8',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '6',
        'remote_host': '8',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '7',
        'remote_host': '8',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '9',
        'remote_host': '16',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '16',
        'remote_host': '22',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '9',
        'remote_host': '14',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '14',
        'remote_host': '15',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '10',
        'remote_host': '11',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '10',
        'remote_host': '12',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '10',
        'remote_host': '16',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '11',
        'remote_host': '21',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '11',
        'remote_host': '13',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '11',
        'remote_host': '18',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '11',
        'remote_host': '15',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '11',
        'remote_host': '14',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '12',
        'remote_host': '17',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '12',
        'remote_host': '16',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '12',
        'remote_host': '13',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '12',
        'remote_host': '14',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '13',
        'remote_host': '14',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '13',
        'remote_host': '18',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '14',
        'remote_host': '19',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '14',
        'remote_host': '20',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '15',
        'remote_host': '22',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '16',
        'remote_host': '18',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '17',
        'remote_host': '21',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '18',
        'remote_host': '20',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '18',
        'remote_host': '22',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': '21',
        'remote_host': '22',
        'label': false,
        'tooltip': false,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
    ],
    groups: {
      'group1': {
        'display_style': 'Ellipse',
        'name': 'Group-1',
        'label': true,
        'style': {
          'fillColor': '0Xf4f6fd'
        },
        'label_position': 'Above',
        'children': [
          '1', '2', '3', '4', '5', '6', '7', '8',
        ],
      },
      'group2': {
        'display_style': 'polygon',
        'name': 'Group-2',
        'label': true,
        'style': {
          'fillColor': '0Xf5e9eb'
        },
        'label_position': 'Center',
        'children': [
          '1', '2', '3', '4',
        ],
      },
      'group3': {
        'display_style': 'polygon',
        'name': 'Group-3',
        'label': false,
        'style': {
          'fillColor': '0Xdbeafe'
        },
        'children': [
          '7', '8', '9'
        ],
      },
      'group4': {
        'display_style': 'Ellipse',
        'name': 'Group-4',
        'label': true,
        'style': {
          'fillColor': '0Xfffbee'
        },
        'label_position': 'Above',
        'children': [
          '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'
        ],
      },
      'group5': {
        'display_style': 'rect',
        'name': 'Group-5',
        'label': true,
        'style': {
          'fillColor': '0Xf7ede9'
        },
        'label_position': 'Center',
        'children': [
          '14', '15', '18', '19', '20', '21', '22'
        ],
      }
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
    network.drawNoIConTopology(GroupComponent.data);
  }
}
