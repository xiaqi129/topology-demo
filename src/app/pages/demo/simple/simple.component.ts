import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Network } from 'src/network/network';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.html',
  styleUrls: ['./simple.style.less']
}) export class SimpleComponent implements OnInit {
  static data = {
    devices: [
      {
        'name': '192.168.10.0/24',
        'location': {
          'x': 100,
          'y': 300,
        },
        'style': {
          'color': '0Xc9d4f7',
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
        'style': {
          'color': '0X55efc4',
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
        'style': {
          'color': '0X74b9ff',
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
        'style': {
          'color': '0Xa09bfd',
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
        'style': {
          'color': '0X80ecec',
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
        'remote_host': '172.17.16.134'
      },
      {
        'local_host': '172.17.16.134',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '192.168.18.253'
      },
      {
        'local_host': '192.168.18.253',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '172.17.17.86'
      },
      {
        'local_host': '172.17.17.86',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '192.168.18.229'
      },
      {
        'local_host': '172.17.16.134',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '192.168.18.229'
      },
      {
        'local_host': '192.168.18.253',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '192.168.18.229'
      },
      {
        'local_host': '192.168.10.0/24',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '172.17.17.86'
      },
      {
        'local_host': '192.168.10.0/24',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '172.17.17.86'
      },
      {
        'local_host': '192.168.10.0/24',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '172.17.17.86'
      },
      {
        'local_host': '192.168.10.0/24',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '172.17.17.86'
      },
      {
        'local_host': '192.168.10.0/24',
        'link_protocol': 'Subnet',
        'remote_int': 'Po1(Te1/0/1)',
        'local_int': '192.168.12.63',
        'link_state': 'normal',
        'remote_host': '172.17.17.86'
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
    network.drawNoIConTopology(SimpleComponent.data);
  }
}
