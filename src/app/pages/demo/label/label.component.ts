import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.less']
})
export class LabelComponent implements OnInit {
  static data = {
    devices: [
      {
        'name': 'Router 192.168.10.0/24',
        'location': {
          x: 318.46000000385465,
          y: 185.95999999583714
        },
        'image': '1',
        'width': 40,
        'height': 40,
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
        }
      },
      {
        'name': 'Nexus-5000&9000-service 172.17.16.134',
        'location': {
          x: 437.2600000038543,
          y: 280.99999999583775
        },
        'image': '2',
        'width': 40,
        'height': 40,
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
        }
      },
      {
        'name': 'Nexus-2000-service 192.168.18.253',
        'location': {
          x: 625.5399084418261,
          y: 299.27331298583806
        },
        'image': '3',
        'width': 40,
        'height': 40,
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
        }
      },
      {
        'name': 'Nexus-7000-service 172.17.17.86',
        'location': {
          x: 666.9400000038574,
          y: 162.1999999958375
        },
        'image': '4',
        'width': 40,
        'height': 40,
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
        }
      },
      {
        'name': 'ALE(NLB) 192.168.18.229',
        'location': {
          x: 524.3800000038553,
          y: 27.559999995837295
        },
        'image': '5',
        'width': 40,
        'height': 40,
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
        }
      },
      {
        'name': 'Switch 192.168.20.210',
        'location': {
          x: 484.7800000038556,
          y: 162.1999999958375
        },
        'image': '6',
        'width': 40,
        'height': 40,
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
        }
      },
    ],
    links: [
      {
        'local_host': 'Router 192.168.10.0/24',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': 'Switch 192.168.20.210',
        'label': true,
        'tooltip': true,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': 'Nexus-5000&9000-service 172.17.16.134',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': 'Switch 192.168.20.210',
        'label': true,
        'tooltip': true,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': 'Nexus-2000-service 192.168.18.253',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': 'Switch 192.168.20.210',
        'label': true,
        'tooltip': true,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
      {
        'local_host': 'Nexus-7000-service 172.17.17.86',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': 'Switch 192.168.20.210',
        'label': true,
        'tooltip': true,
      },
      {
        'local_host': 'Nexus-7000-service 172.17.17.86',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': 'Switch 192.168.20.210',
        'label': true,
        'tooltip': true,
      },
      {
        'local_host': 'Nexus-7000-service 172.17.17.86',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': 'Switch 192.168.20.210',
        'label': true,
        'tooltip': true,
      },
      {
        'local_host': 'Nexus-7000-service 172.17.17.86',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': 'Switch 192.168.20.210',
        'label': true,
        'tooltip': true,
      },
      {
        'local_host': 'Nexus-7000-service 172.17.17.86',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': 'Switch 192.168.20.210',
        'label': true,
        'tooltip': true,
      },
      {
        'local_host': 'ALE(NLB) 192.168.18.229',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': 'Switch 192.168.20.210',
        'label': true,
        'tooltip': true,
        'style': {
          'lineType': 1,
          'lineFull': 0,
          'lineColor': '0XDDDDDD',
        }
      },
    ],
    groups: [

    ]
  };
  static iconResource = {
    resources: { name: 'resources', url: '../../../../assets/pic/Icon.json' },
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
    network.drawTopology(LabelComponent.data, LabelComponent.iconResource);
  }
}
