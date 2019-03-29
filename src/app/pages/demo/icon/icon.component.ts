import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {

  static data = {
    devices: [
      {
        'name': '1',
        'location': {
          'x': 0,
          'y': 200,
        },
        'label': false,
        'tooltip': false,
        'image': 'Windows',
        'width': 40,
        'height': 40,
        'style': {
          'color': '0Xc9d4f7',
          'width': 20,
        },
      },
      {
        'name': '2',
        'image': 'Cisco',
        'width': 60,
        'height': 60,
        'location': {
          'x': 200,
          'y': 250,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0X55efc4',
          'width': 20,
        },
      },
      {
        'name': '3',
        'location': {
          'x': 250,
          'y': 500,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 15,
        },
      },
      {
        'name': '4',
        'location': {
          'x': 500,
          'y': 350,
        },
        'image': 'Google',
        'width': 40,
        'height': 40,
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa09bfd',
          'width': 20,
        },
      },
      {
        'name': '5',
        'location': {
          'x': 600,
          'y': 530,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0X80ecec',
          'width': 10,
        },
      },
      {
        'name': '6',
        'location': {
          'x': 730,
          'y': 320,
        },
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0Xa09bfd',
          'width': 15,
        },
      },
      {
        'name': '7',
        'location': {
          'x': 900,
          'y': 530,
        },
        'image': 'baidu',
        'width': 40,
        'height': 40,
        'label': false,
        'tooltip': false,
        'style': {
          'color': '0X80ecec',
          'width': 20,
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
        'local_host': '4',
        'remote_host': '5',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '4',
        'remote_host': '6',
        'label': false,
        'tooltip': false,
      },
      {
        'local_host': '4',
        'remote_host': '7',
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

    ],
    groups: [

    ]
  };

  static iconResource = {
    resources: { name: 'resources', url: '../../../../assets/pic/registerIcon.json' },
  };
  constructor(
    public commonService: CommonService,
  ) {}

  ngOnInit() {
    this.renderTopo();
  }

  public renderTopo() {
    const network = new TopoNetwork(
      'network',
      this.commonService,
    );
    network.drawTopology(IconComponent.data, IconComponent.iconResource);
  }
}
