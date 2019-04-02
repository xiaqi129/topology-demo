import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.less']
})
export class ZoomComponent implements OnInit {

  static data = {
    devices: [
      {
        'name': '192.168.10.0/24',
        'location': {
          'x': 100,
          'y': 300,
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
        }
      },
      {
        'name': '172.17.16.134',
        'location': {
          'x': 200,
          'y': 230,
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
        }
      },
      {
        'name': '192.168.18.253',
        'location': {
          'x': 350,
          'y': 250,
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
        }
      },
      {
        'name': '172.17.17.86',
        'location': {
          'x': 500,
          'y': 320,
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
        }
      },
      {
        'name': '192.168.18.229',
        'location': {
          'x': 430,
          'y': 450,
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
    network.drawNoIConTopology(ZoomComponent.data);
  }
}
